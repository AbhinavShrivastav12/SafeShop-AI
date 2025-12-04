'use client'

import { IoShareSocialOutline } from "react-icons/io5";

interface ShareButtonProps {
    onClick?: () => void;
}

export default function ShareButton({onClick}:ShareButtonProps) {
    return(
        <button className="px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all whitespace-nowrap"
        onClick={onClick}
        >
            <i className="ri-share-line text-xl"><IoShareSocialOutline /> </i>
        </button>
    )
}