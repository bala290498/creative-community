"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls?: string[]
  emojis?: string[]
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
  emojis,
}: AvatarCirclesProps) => {
  const displayItems = emojis || avatarUrls || []
  
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
      {displayItems.map((item, index) => (
        <div
          key={index}
          className="relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-white hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          {emojis ? (
            <span 
              className="text-2xl md:text-3xl inline-block" 
              style={{ 
                animation: `emoji-breathe 2.5s ease-in-out infinite, emoji-wiggle ${1.5 + index * 0.1}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s, ${index * 0.3}s`
              }}
            >
              {item}
            </span>
          ) : (
            <img
              className="w-full h-full object-cover"
              src={item}
              width={48}
              height={48}
              alt={`Avatar ${index + 1}`}
              loading="lazy"
            />
          )}
        </div>
      ))}
      <a
        className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs md:text-sm font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black transition-all hover:scale-110"
        href="/membership"
      >
        +{numPeople}
      </a>
    </div>
  )
}

export { AvatarCircles }

