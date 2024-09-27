import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'


const Login = () => {
  const [credential, setCredential] = useState({email:"",password:""})
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const handleChange=(e)=>{
    setCredential({...credential,[e.target.name]:e.target.value})
  }
  return (
    <div
      className="min-h-screen flex items-center justify-center transition-colors duration-300 bg-gray-200"
    > <div className="my-1 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold dark:text-white text-center mb-6">Login</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium dark:text-gray-200" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              name='email'
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:bg-zinc-700 dark:border-gray-600 dark:text-gray-100"
              value={credential.email}
              onChange={handleChange}
              />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-200" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              id="password"
              type="password"
              required
              name="password"
             className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:bg-zinc-700 dark:border-gray-600 dark:text-gray-100"
              value={credential.password}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm dark:text-gray-200">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <Link href="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
          onSubmit={handleSubmit}
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
