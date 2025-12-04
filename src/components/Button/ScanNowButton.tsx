'use client'

import React from "react";

interface SubmitButtonProps {
    onClick?: () => void;
    className?: string; 
    title?: string;
}

export default function ScanNowButton ({onClick,className="",title}:SubmitButtonProps) {
    return (
       <button className={`bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 whitespace-nowrap
       ${className}`}
        onClick={onClick}>
        {title}
       </button>
    )
}