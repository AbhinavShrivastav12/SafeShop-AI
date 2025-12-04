'use client';
import React from 'react';

interface InputProps {
  title?: string;
  placeholder?: string;
  value?: string; // <-- added value prop
  onChange?: (value: string) => void;
  className?: string;
}

export default function Input({ title, onChange, placeholder, className, value }: InputProps) {
  return (
    <input
      className={`flex-1 px-6 py-4 text-base outline-none text-gray-700 placeholder-gray-400 transition-all ${className}`}
      title={title}
      value={value} // <-- controlled input
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
    />
  );
}
