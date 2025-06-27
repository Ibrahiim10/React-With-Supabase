import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const avatarUrl = null;
  // 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D';

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* left */}

          <div className="flex">
            {/* logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-orange-600 text-2xl font-bold">
                Blogify
              </Link>
            </div>

            {/* navigation links */}
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/home"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-orange-500 text-sm font-medium text-gray-500"
              >
                Home
              </Link>
              <Link
                to="/articles"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500"
              >
                Articles
              </Link>
              <Link
                to="/write"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500"
              >
                Write
              </Link>
              <Link
                to="/my-articles"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500"
              >
                My Articles
              </Link>
            </nav>
          </div>

          {/* right */}
          <div className="flex items-center space-x-4">
            {/* profile */}

            {isLoggedIn ? (
              <>
                <div className="text-sm text-gray-700">
                  <span>Hello, Ibra</span>
                </div>

                <div className="relative">
                  <button
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {
                      /* Profile Avatar */
                      avatarUrl ? (
                        <img
                          src={avatarUrl}
                          alt="Avatar"
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <span className="text-gray-500">
                          <FaUser className="text-gray-600" />
                        </span>
                      )
                    }
                  </button>
                  {/* dropdown menu  */}
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 w-48 bg-white mt-1 rounded-md shadow-lg z-10"
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div className="absolute h-3 w-full top-[12px]"></div>
                      <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                      </Link>
                      <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Manage Articles
                      </Link>
                      <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Signout
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* buttons */
              <div className=" hidden sm:flex sm:items-center sm:space-x-4">
                <Link
                  to="/signin"
                  className="inline-flex items-center justify-center px-4 py-2 border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-orange-600 bg-white border border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
