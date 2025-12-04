'use client'

import React from "react";

interface SubmitButtonProps {
    onClick?: () => void;
    className?: string; 
    title?: string;
    icon?: React.ReactNode;
}

export default function ScanProductButton ({onClick,className="",title,icon}:SubmitButtonProps) {
    return (
       <button className={`bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2.5 rounded-full text-sm font-medium  cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 whitespace-nowrap
       ${className}`}
        onClick={onClick}>
        <span className="inline md:hidden">{icon}</span>
        <span className="hidden md:inline">{title}</span>
       </button>
    )
}