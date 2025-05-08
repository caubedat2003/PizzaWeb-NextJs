'use client';

import { useState } from 'react';

export default function AuthForm({ type }: { type: 'login' | 'register' }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
        // Gửi API login/register tại đây
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 space-y-4 w-full max-w-md"
        >
            <h2 className="text-2xl font-bold text-center text-gray-800">
                {type === 'login' ? 'Login' : 'Register'}
            </h2>

            <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#f2a4c6] to-[#d779da] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
                {type === 'login' ? 'Login' : 'Register'}
            </button>
        </form>
    );
}
