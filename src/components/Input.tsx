'use client';
import React from 'react';

export default function Input({ value, onChange, placeholder }: { value: string; onChange: (v:string)=>void; placeholder?: string }) {
  return (
    <input
      className="w-full rounded-md border border-slate-200 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      placeholder={placeholder || 'Paste product URL or JSON of reviews...'}
    />
  );
}
