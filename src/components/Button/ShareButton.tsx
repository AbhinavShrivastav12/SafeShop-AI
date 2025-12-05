'use client'

import { IoShareSocialOutline } from "react-icons/io5";

interface ShareButtonProps {
    onClick?: () => void;
}

export default function ShareButton({onClick}:ShareButtonProps) {
    return(
        <button className="flex justify-center items-center md:px-6 md:py-4 md:border-2 md:border-gray-300 md:rounded-xl font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all whitespace-nowrap "
        onClick={onClick}
        >
            <i className="ri-share-line text-xl"><IoShareSocialOutline /> </i>
        </button>
    )
}