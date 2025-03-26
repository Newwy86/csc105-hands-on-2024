import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4"> {/* Dark mode background and white text */}
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1> {/* Larger font size */}
      <p className="text-lg mb-8">Enjoy our HomePage!!</p> {/* Larger font size */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96 text-center"> {/* Card background */}
        <p className="text-gray-300">This is a simple example of a styled Home Page.</p> {/* Light gray text */}
        <p className="text-gray-300 mt-4">Feel free to customize it as you like!</p> {/* Light gray text */}
      </div>
    </div>
  );
}

export default HomePage;