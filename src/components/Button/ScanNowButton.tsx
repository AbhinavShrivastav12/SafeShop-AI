'use client'

import Link from "next/link";
import React from "react";

interface SubmitButtonProps {
    onClick?: () => void;
    className?: string; 
    title?: string;
    link?: string;
}

export default function ScanNowButton ({onClick,className="",title,link}:SubmitButtonProps) {
    const buttonClass = `bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 cursor-pointer rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 whitespace-nowrap
       ${className}`;
       if(link) {
        return(
            <Link href={link} target="_blank" className={buttonClass}>
                {title}
            </Link>
        );
       }
    return (
       <button className={buttonClass}
        onClick={onClick}>
        {title}
       </button>
    )
}