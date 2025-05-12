import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FoodLoader = () => {
  const [progress, setProgress] = useState(0);
  const foodIcons = ["🍕", "🍔", "🍣", "🍜", "🍦", "☕"];
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 10));
    }, 300);

    // Rotate food icons
    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev === foodIcons.length - 1 ? 0 : prev + 1));
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(iconInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50">
      {/* Animated food icon */}
      <div className="text-6xl mb-6 animate-bounce">
        {foodIcons[currentIcon]}
      </div>
      
      {/* Loading text with animated dots */}
      <div className="text-xl font-medium text-gray-700 mb-4">
        Preparing your food experience
        <span className="inline-block ml-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <span 
              key={i}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              .
            </span>
          ))}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Fun food fact */}
      <div className="text-sm text-gray-500 italic">
        Did you know? The world's largest pizza was 13,580 square feet!
      </div>
    </div>
  );
};

export default FoodLoader;