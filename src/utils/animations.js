// Animation utility to bridge React dynamic rendering and legacy jQuery/anime.js events
export const initScrollAnimations = () => {
  const $ = window.jQuery || window.$;
  const anime = window.anime;
  if (!$ || !anime) return;

  const animeBreakPoint = 1199;
  const getWindowWidth = () => $(window).width();

  // Re-initialize jQuery .appear() on all dynamic animatable elements
  // This triggers the global event delegates in main.js for counters, progress bars, etc.
  $(".vertical-counter, .counter, .progress-bar, .pie-chart-style-01, .splitting-animation, [data-anime]").each(function () {
    const $self = $(this);
    if (typeof $self.appear === 'function') {
      $self.appear().trigger("resize");
    }
  });

  // Re-implement the data-anime scrolling animation engine for React mounted elements
  const $dataAnimeElements = $("[data-anime]:not(.swiper [data-anime])");

  $dataAnimeElements.each(function () {
    const $self = $(this);
    if ($self.hasClass('anime-complete') || $self.hasClass('appear')) return;

    let animeOptions = $self.attr("data-anime");
    if (!animeOptions) return;

    try {
      if (typeof animeOptions === "string") {
        // Handle standard JSON or single quote object syntax
        animeOptions = (new Function("return " + animeOptions))();
      }
    } catch (err) {
      console.error("Error parsing data-anime options:", animeOptions, err);
      return;
    }

    if (animeOptions && getWindowWidth() > animeBreakPoint) {
      const effect = animeOptions.effect && animeOptions.effect.toLowerCase();

      if (typeof $self.appear === 'function') {
        $self.appear().one("appear", function () {
          if (!$self.hasClass("appear")) {
            $self.addClass("appear");
            if (effect === "slide") {
              slideAnimation(this, animeOptions, anime);
            } else {
              animeAnimation(this, animeOptions, anime);
            }
          }
        });

        // Immediately trigger appear for elements already in the viewport
        const rect = this.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        if (inViewport && !$self.hasClass("appear")) {
          $self.trigger("appear");
        }
      }
    } else {
      $self.removeAttr("data-anime");
      $("body").addClass("no-animation");
    }
  });
};

// Replicate main.js animeAnimation
const animeAnimation = (target, options, anime) => {
  let child = target;
  let staggerValue = options.staggervalue || 0;
  let delay = options.delay || 0;
  let anime_animation = anime.timeline();

  function applyTransitionStyles(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.transition = "none";
      if (options.willchange) {
        element.style.willChange = "transform";
      }
    }
  }

  if (options.el === "childs") {
    child = target.children;
    applyTransitionStyles(target.children);
  }

  if (options.perspective) {
    target.style.perspective = `${options.perspective}px`;
  }
  if (options.willchange) {
    target.style.willChange = options.willchange;
  }

  anime_animation.add({
    targets: child,
    ...options,
    delay: anime.stagger(staggerValue, { start: delay }),
    complete: function () {
      if (options.el) {
        target.classList.add("anime-child");
        target.classList.add("anime-complete");
        for (let i = 0; i < target.children.length; i++) {
          const element = target.children[i];
          element.style.removeProperty("opacity");
          element.style.removeProperty("transform");
          element.style.removeProperty("transition");
          if (target.classList.contains("grid")) {
            element.style.transition = "none";
          }
        }
      } else {
        target.classList.add("anime-complete");
        target.style.removeProperty("opacity");
        target.style.removeProperty("transform");
        target.style.removeProperty("transition");
      }
    },
  });
};

// Replicate main.js slideAnimation
const slideAnimation = (target, options, anime) => {
  let duration = options.speed ? options.speed : 100,
    direction = options.direction ? options.direction : "lr",
    delay = options.delay ? options.delay : 0;
  target.style.position = "relative";
  let tmp = document.createElement("div");
  tmp.style.width = tmp.style.height = "100%";
  tmp.style.top = tmp.style.left = 0;
  tmp.style.background = options.color ? options.color : "#fff";
  tmp.style.position = "absolute";
  if (direction === "lr") {
    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "0% 50%";
    tmp.style.WebkitTransform = tmp.style.transform = "scaleX(0)";
  } else if (direction === "tb") {
    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "50% 0%";
    tmp.style.WebkitTransform = tmp.style.transform = "scaleY(0)";
  } else if (direction === "bt") {
    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "100% 100%";
    tmp.style.WebkitTransform = tmp.style.transform = "scaleY(0)";
  } else {
    tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "100% 50%";
    tmp.style.WebkitTransform = tmp.style.transform = "scaleX(0)";
  }
  target.appendChild(tmp);
  let slide_anime = anime.timeline();
  slide_anime
    .add({
      targets: tmp,
      scaleX: direction === "lr" || direction === "rl" ? [0, 1] : [1, 1],
      scaleY: direction === "tb" || direction === "bt" ? [0, 1] : [1, 1],
      duration: duration + 500,
      easing: "easeInOutCubic",
      delay: delay,
      complete: function () {
        if (direction === "lr") {
          tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "100% 50%";
        } else if (direction === "tb") {
          tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "50% 100%";
        } else if (direction === "bt") {
          tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "0% 0%";
        } else {
          tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = "0% 50%";
        }
        anime({
          targets: tmp,
          duration: duration + 500,
          easing: "easeInOutCubic",
          scaleX: direction === "lr" || direction === "rl" ? [1, 0] : [1, 1],
          scaleY: direction === "tb" || direction === "bt" ? [1, 0] : [1, 1],
          complete: function () {
            target.removeChild(tmp);
          },
        });
      },
    })
    .add(
      {
        targets: target.querySelector("*"),
        easing: "easeOutQuint",
        delay:
          direction === "lr"
            ? anime.stagger(duration, { start: 1000 })
            : anime.stagger(-duration, { start: 1000 }),
        opacity: [0, 1],
      },
      "-=900"
    );
};

// Expose globally
window.initScrollAnimations = initScrollAnimations;
