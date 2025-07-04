import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaUser } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { isLoggedIn, profile, logout } = useAuth();
  // console.log('user profile', profile);

  const avatar_url = null;
  // 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D';

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* right and left  humbugger*/}
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
                to="/"
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
              {isLoggedIn && (
                <>
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
                </>
              )}
            </nav>
          </div>

          {/* right */}
          <div className="flex items-center space-x-4">
            {/* profile */}

            {isLoggedIn ? (
              <>
                <div className="text-sm text-gray-700">
                  <span>Hello , {profile?.username}</span>
                </div>

                <div className="relative">
                  <button
                    className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {
                      /* Profile Avatar */
                      avatar_url ? (
                        <img
                          src={avatar_url}
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
                      <button
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Signout
                      </button>
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

          {/* Humbugger */}

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md text-gray-400 "
            >
              {isMenuOpen ? (
                <CiMenuBurger className="block w-6 h-6" />
              ) : (
                <IoMdClose className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}

      {isMenuOpen && (
        <div className="sm:hidden py-4">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/home"
              className="block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-base font-medium text-orange-700 bg-orange-50"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-800"
            >
              Articles
            </Link>
          </div>

          {/* if is login  */}
          {isLoggedIn && (
            <>
              <Link
                to="/editor"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                Write
              </Link>
              <Link
                to="/manage-article"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                My Article
              </Link>
              <Link
                to="/profile"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                Profile
              </Link>
              <button
                // onClick={logout}
                onClick={() => {
                  logout();
                }}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                Sign Out
              </button>
            </>
          )}

          {/* if is not login  */}
          {!isLoggedIn && (
            <>
              <Link
                to="/signin"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
