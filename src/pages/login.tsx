import React, { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-slate-900 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          MyCash
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="******"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-lime-500 text-gray-900 font-semibold rounded-md shadow-sm hover:bg-lime-400 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-lime-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
