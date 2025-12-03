'use client';
import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-t-transparent border-slate-400"></div>
      <span className="text-sm text-slate-600">Scanning…</span>
    </div>
  );
}
