'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
    // Optional: Add real API logic here
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center px-4 relative">
      {/* Home Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition"
      >
        ⬅ Home
      </button>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-md text-white rounded-xl p-8 shadow-xl border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:brightness-110 font-semibold rounded-lg shadow-lg transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-300">
          Don’t have an account?{' '}
          <a href="/components/signup" className="text-purple-300 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}
