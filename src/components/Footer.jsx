import React from 'react';
import { Link } from 'react-router';
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* nav */}
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <Link
              to="/"
              className="text-base text-gray-500 hover:text-gray-500"
            >
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/articles"
              className="text-base text-gray-500 hover:text-gray-500"
            >
              Articles
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/tags"
              className="text-base text-gray-500 hover:text-gray-500"
            >
              Tags
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link
              to="/about"
              className="text-base text-gray-500 hover:text-gray-500"
            >
              About Us
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/contact"
              className="text-base text-gray-500 hover:text-gray-500"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* social icons */}

        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            {' '}
            <span className="sr-only">Twitter</span>
            <FiTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            {' '}
            <span className="sr-only">Twitter</span>
            <FiInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            {' '}
            <span className="sr-only">Twitter</span>
            <FiGithub className="h-6 w-6" />
          </a>
        </div>

        {/* copyright */}

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Blogity. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
