import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Replace with your login logic
    navigate('/'); // Redirect to Home Page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900"> {/* Dark mode background */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96"> {/* Card background */}
        <h1 className="text-2xl font-bold text-white text-center mb-6">Login</h1> {/* White text */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label> {/* Light gray label */}
            <input type="email" id="email" {...register('email')} className="mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white" /> {/* Dark input field */}
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label> {/* Light gray label */}
            <input type="password" id="password" {...register('password')} className="mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white" /> {/* Dark input field */}
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">Login</button>
        </form>
        <p className="mt-4 text-center text-gray-300"> {/* Light gray text */}
          Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;