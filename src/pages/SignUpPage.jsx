import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { signUpUser } from '../lib/auth';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      await signUpUser(email, password, username);
      setSuccess(true);

      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    } catch (error) {
      console.error(error);
      setError(error.message || 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
            <p className="text-gray-600 mb-4">
              Your account has been created successfully. Please check your
              email for verification.
            </p>
            <p className="text-gray-500 text-sm">
              Redirecting to sign in page in a few seconds...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        {/* title and subtitle */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-600 mt-2">
            Join oir community and start sharing your ideas
          </p>
        </div>

        {/* form info */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm ">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 "
                htmlFor="email"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 "
                htmlFor="username"
              >
                Username
              </label>

              <input
                type="username"
                id="username"
                placeholder="ibrahim"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 "
                htmlFor="password"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characters
              </p>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 "
                htmlFor="username"
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="******"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200 disabled:cursor-not-allowed disabled:bg-orange-500"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-6 ">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="text-orange-600 hover:text-orange-800 font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
