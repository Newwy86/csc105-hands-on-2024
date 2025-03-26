import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function FavouriteDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q');
  const size = searchParams.get('size');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4"> {/* Dark mode background and white text */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"> {/* Card background */}
        <h1 className="text-3xl font-bold mb-6 text-center">Favourite Detail</h1> {/* Larger font size */}
        <p className="text-lg">Your favourite post is <span className="font-semibold">{query}</span>.</p> {/* Highlight query */}
        <p className="text-lg">Post ID is <span className="font-semibold">{id}</span>.</p> {/* Highlight id */}
        <p className="text-lg">Size is <span className="font-semibold">{size}</span>.</p> {/* Highlight size */}
      </div>
    </div>
  );
}

export default FavouriteDetailPage;