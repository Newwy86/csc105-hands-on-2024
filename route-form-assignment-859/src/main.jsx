import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FavouritesPage from './pages/FavouritesPage';
import FavouriteDetailPage from './pages/FavouriteDetailPage';
import SignUpPage from './pages/SignUpPage'; 
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'favourites', element: <FavouritesPage /> },
      { path: 'favourite/:id', element: <FavouriteDetailPage /> },
      { path: 'fav/:id', element: <FavouriteDetailPage /> },
    ],
  },
  { // route สำหรับ SignUpPage ที่ไม่แสดง Navbar
    path: '/signup',
    element: <SignUpPage />,
  },
  { // route สำหรับ NotFoundPage
    path: '*',
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);