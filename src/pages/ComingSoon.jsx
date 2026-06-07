import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const Countdown = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown">
      <div className="countdown-box">
        <div className="number">{pad(timeLeft.days)}</div>
        <span>Days</span>
      </div>
      <div className="countdown-box">
        <div className="number">{pad(timeLeft.hours)}</div>
        <span>Hours</span>
      </div>
      <div className="countdown-box">
        <div className="number">{pad(timeLeft.minutes)}</div>
        <span>Minutes</span>
      </div>
      <div className="countdown-box">
        <div className="number">{pad(timeLeft.seconds)}</div>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export function ComingSoon() {
  const particlesOptions = useMemo(() => ({
    particles: {
      number: { value: 10, density: { enable: true, value_area: 800 } },
      color: { value: "#b0b4e2" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true,
    background: {
      color: "transparent"
    }
  }), []);

  return (
    <section className="cover-background overflow-auto full-screen position-relative" style={{ backgroundImage: 'url(/AK_Accounting_Tax_Consultancy/images/coming-soon-bg.jpg)' }}>
      <ParticlesProvider init={async (engine) => await loadSlim(engine)}>
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="position-absolute h-100 top-0 left-0 w-100"
          style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </ParticlesProvider>
      
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100 z-index-2 position-relative">
          <div className="col-md-12 col-lg-10 col-xl-8 col-xxl-7 text-center" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <Link className="mb-0 md-mb-50px d-inline-block" to="/"> 
              <img src="/AK_Accounting_Tax_Consultancy/images/logo_vertical.svg" data-at2x="/AK_Accounting_Tax_Consultancy/images/logo_horizontal.svg" alt="" style={{ maxHeight: '50px' }} />
            </Link>
            <h1 className="fw-700 fs-70 mb-10px text-dark-gray ls-minus-2px">Coming soon!</h1>
            <h6 className="text-dark-gray mb-0">We're getting ready to launch!</h6>
            <div className="countdown-style-03 mb-9 mt-9">
              <Countdown endDate="2026/06/08 00:00:08" />
            </div>
            <div className="elements-social social-icon-style-08">
              <ul className="medium-icon dark">
                <li className="mb-0"><a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li className="mb-0"><a className="dribbble" href="http://www.dribbble.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-dribbble"></i></a></li>
                <li className="mb-0"><a className="twitter" href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                <li className="mb-0"><a className="instagram" href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="mb-0"><a className="linkedin" href="http://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
