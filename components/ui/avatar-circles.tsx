"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: string[]
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-6 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <div
          key={index}
          className="relative h-20 w-20 md:h-24 md:w-24 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-white animate-pulse-slow hover:scale-110 transition-transform duration-300"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={url}
            width={96}
            height={96}
            alt={`Avatar ${index + 1}`}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      ))}
      <a
        className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border-4 border-white bg-black text-center text-sm md:text-base font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black transition-all shadow-lg hover:scale-110"
        href="/membership"
      >
        +{numPeople}
      </a>
    </div>
  )
}

export { AvatarCircles }

