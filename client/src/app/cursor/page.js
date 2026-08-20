'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-100 cursor-none">
      {/* 3D Custom Cursor */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] bg-gradient-to-br from-indigo-500 to-purple-500 shadow-xl"
        style={{
          transform: `translate3d(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px, 0) scale(1.05)`,
          transition: 'transform 0.08s ease-out',
        }}
      ></div>

      {/* Page Content */}
      <main className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow-md">
          Welcome to Evento 🎉
        </h1>
        <p className="text-gray-600 text-lg">Move your mouse to see the custom cursor in action!</p>
        <button className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:scale-105 transform transition shadow-lg">
          Hover Me
        </button>
      </main>
    </div>
  );
}
