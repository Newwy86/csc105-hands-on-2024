import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function FavouritesPage() {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.query}&size=${data.size}`);
  };

  const numberValue = watch("number");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4"> {/* Dark mode background and white text */}
      <h1 className="text-3xl font-bold mb-6 text-center">Favourites Page</h1> {/* Larger font size */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mx-auto"> {/* Card background */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-300">Number (1-100):</label> {/* Light gray label */}
            <input
              type="number"
              id="number"
              {...register('number', {
                required: 'Number is required',
                min: { value: 1, message: 'Number must be at least 1' },
                max: { value: 100, message: 'Number must be at most 100' },
              })}
              className="mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white" // Dark input field
            />
            {numberValue < 1 || numberValue > 100 ? (
              <p className="text-red-500 text-sm">Number must be between 1 and 100</p>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Query Parameter (q):</label> {/* Light gray label */}
            <select {...register('query')} className="mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"> {/* Dark select field */}
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Size Parameter (size):</label> {/* Light gray label */}
            <select {...register('size')} className="mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 text-white"> {/* Dark select field */}
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">Go to Favourite Detail</button>
        </form>
      </div>
    </div>
  );
}

export default FavouritesPage;