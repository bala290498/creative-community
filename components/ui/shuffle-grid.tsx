"use client"

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-secondary-600 font-medium">
          Our Community
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-gray-900">
          Join a Large Community
        </h3>
        <p className="text-base md:text-lg text-gray-700 my-4 md:my-6">
          Connect with like-minded people, make new friends, and collaborate on meaningful projects. Be part of a growing community where everyone is welcome.
        </p>
        <a 
          href="/community"
          className={cn(
            "bg-secondary-500 text-white font-medium py-2 px-4 rounded-md inline-block",
            "transition-all hover:bg-secondary-600 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
          )}
        >
          View All Projects
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, name: "Priya" },
  { id: 2, name: "Karthik" },
  { id: 3, name: "Meera" },
  { id: 4, name: "Arjun" },
  { id: 5, name: "Divya" },
  { id: 6, name: "Vijay" },
  { id: 7, name: "Kavitha" },
  { id: 8, name: "Raj" },
  { id: 9, name: "Anjali" },
  { id: 10, name: "Suresh" },
  { id: 11, name: "Lakshmi" },
  { id: 12, name: "Ravi" },
  { id: 13, name: "Nithya" },
  { id: 14, name: "Anand" },
  { id: 15, name: "Shruti" },
  { id: 16, name: "Ganesh" },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => {
    // Using DiceBear API with adventurer style for multi-color avatars
    const avatarUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(sq.name)}&size=200`;
    return (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full rounded-md overflow-hidden bg-gray-200 flex items-center justify-center"
      >
        <img
          src={avatarUrl}
          alt={sq.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
    );
  });
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

