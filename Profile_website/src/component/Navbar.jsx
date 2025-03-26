// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <>
            <div className = "flex flex-row justify-between m-5">
                <h1 className="p-2 text-2xl font-bold" >Artist John</h1>
                <div className="flex flex-row">
                    <p className="p-2  hover:bg-yellow-200 mr-10 rounded-full">Home</p>
                    <p className="p-2 hover:bg-yellow-200 mr-10 rounded-full">About me</p>
                    <p className="p-2 hover:bg-yellow-200 mr-10 rounded-full">Gallery</p>
                </div>

                <button className = "bg-green-600 hover:bg-green-700 text-white p-2 shadow-md rounded-full">
                    Contact
                </button>
            </div>

        </>
  );
};

export default Navbar;