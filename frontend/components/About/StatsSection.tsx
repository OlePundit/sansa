"use client"

import { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Typed from "typed.js";

const StatsSection = () => {
    const el = useRef(null);
    const eb = useRef(null);

    useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Numbers"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: false,
        showCursor: false,
    });
    return () => typed.destroy();
    }, []);

    useEffect(() => {
    const typedB = new Typed(eb.current, {
        strings: ["Talking"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: false,
        showCursor: false,
    });
    return () => typedB.destroy();
    }, []);
  const [progress, setProgress] = useState({
    success: 0,
    clients: 0,
    impact: 0
  });

  // Animation settings - ADJUST THESE VALUES
  const ANIMATION_DELAY = 300; // ms before animation starts
  const ANIMATION_DURATION = 2000; // ms for the animation to complete

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress({
        success: 95,
        clients: 90,
        impact: 88
      });
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: progress.success, label: 'success rate', color: '#2C96E2' },
    { value: progress.clients, label: 'Happy clients', color: '#2C96E2' },
    { value: progress.impact, label: 'Impact', color: '#2C96E2' }
  ];

  return (
    <div className="section-stats py-10 sm:py-16" >
      <h2 className="text-center text-white text-shadow-lg font-bold font-bold text-3xl md:text-4xl mb-10">
        Let Our <br />
        <span ref={el} className="text-[#2f976b]"></span> Do The <span ref={eb} className="text-[#2f976b]"></span>
      </h2>
      <div
        className="
          stat-wrap mt-5 mx-auto
          flex flex-col items-center justify-center space-y-10
          md:flex-row md:space-y-0 md:space-x-12
        "
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 mx-3 lg:w-40 lg:h-40">
              <CircularProgressbar
                value={stat.value}
                text={`${stat.value}%`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: stat.color,
                  textColor: '#ffffff',
                  trailColor: 'rgba(255, 255, 255, 0.2)',
                  pathTransitionDuration: ANIMATION_DURATION / 1000,
                  pathTransition: 'easeInOut',
                })}
              />
            </div>
            <div className="text-white font-sans font-medium mt-4 text-center text-2xl lg:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StatsSection;