'use client';
import { useEffect, useState } from "react";

interface QualityCircleProps {
  score: number;
}

export const AnimatedQualityCircle = ({ score }: QualityCircleProps) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let start: number | null = null; // correct: null initially
    const duration = 1000; // 1s animation

    const step = (timestamp: number) => {
      if (start === null) start = timestamp; // set start exactly once
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayScore(Math.round(progress * score));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [score]);

  const arc = (displayScore / 10) * 360;

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth={8} fill="none" />
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="url(#gradient)"
            strokeWidth={8}
            fill="none"
            strokeDasharray={`${arc} 360`}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{displayScore}</span>
          <span className="text-sm text-gray-500">/10</span>
        </div>
      </div>
    </div>
  );
};
