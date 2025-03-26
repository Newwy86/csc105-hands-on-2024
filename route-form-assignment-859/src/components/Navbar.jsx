import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4"> {/* เพิ่ม bg-gray-800 และ p-4 */}
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white ${isActive ? 'font-bold' : ''}` // เพิ่ม text-white
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-white ${isActive ? 'font-bold' : ''}` // เพิ่ม text-white
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              `text-white ${isActive ? 'font-bold' : ''}` // เพิ่ม text-white
            }
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;