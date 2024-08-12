import React, { useState } from "react";
import { Input } from "../../ui/form/input";
import { Label } from "../../ui/form/label";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //
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
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="exemplo@site.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              placeholder="**********"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-lime-500 text-gray-900 font-semibold rounded-md shadow-sm hover:bg-lime-400 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-lime-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex justify-between text-sm text-gray-400">
          <a href="" className="hover:text-gray-300">
            Esqueci minha senha
          </a>
          <a href="" className="hover:text-gray-300">
            Primeiro acesso
          </a>
        </div>
      </div>
    </div>
  );
}
