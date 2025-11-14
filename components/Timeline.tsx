"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="heading-secondary mb-4 max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-gray-700 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20 px-4">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="relative flex items-start pt-10 md:pt-20"
            >
              {/* Left Content (Even indices) */}
              {isEven && (
                <>
                  <div className="flex-1 pr-4 md:pr-8 text-right">
                    <div className="inline-block max-w-md">
                      {item.content}
                    </div>
                  </div>
                  {/* Timeline Circle */}
                  <div className="relative z-40 flex-shrink-0 mx-2 md:mx-4">
                    <div className="h-12 w-12 rounded-full bg-secondary-500 border-2 border-secondary-600 flex items-center justify-center">
                      <span className="text-white font-bold text-base">{item.title}</span>
                    </div>
                  </div>
                  {/* Right Spacer */}
                  <div className="flex-1 pl-4 md:pl-8"></div>
                </>
              )}

              {/* Right Content (Odd indices) */}
              {!isEven && (
                <>
                  {/* Left Spacer */}
                  <div className="flex-1 pr-4 md:pr-8"></div>
                  {/* Timeline Circle */}
                  <div className="relative z-40 flex-shrink-0 mx-2 md:mx-4">
                    <div className="h-12 w-12 rounded-full bg-secondary-500 border-2 border-secondary-600 flex items-center justify-center">
                      <span className="text-white font-bold text-base">{item.title}</span>
                    </div>
                  </div>
                  {/* Right Content */}
                  <div className="flex-1 pl-4 md:pl-8">
                    <div className="inline-block max-w-md">
                      {item.content}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gray-200 z-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-secondary-500 via-secondary-400 to-secondary-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

