import React, { useState } from 'react';
import { FiCamera, FiMail } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');

  const { user } = useAuth();

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        toast.error('Hey! File size is too large', { position: 'top-right' });
        return;
      }

      setAvatar(file);

      const previewURL = URL.createObjectURL(file);
      setAvatarUrl(previewURL);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* profile header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-6">
            <div className="flex flex-col items-center">
              <div className="relative group:">
                {/* profile picture */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-white shadow-lg">
                  <img
                    src={
                      avatarUrl ||
                      'https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
                    }
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* input image upload */}
                <label
                  htmlFor="avatar-upload"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-110"
                >
                  <FiCamera className="w-5 h-5 text-orange-600" />
                </label>
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </div>

              {/* user info */}
              <h2 className="mt-4 text-2xl font-bold text-white">
                {' '}
                {username || 'Your Profile'}
              </h2>
              <p className="text-orange-100">{user?.email}</p>
            </div>
          </div>

          {/* profile form */}
          <form className="p-6 space-y-6">
            <div className="space-y-6">
              {/* username */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
              </div>

              {/* email {Read-Only}*/}
              <div>
                <label className="block text-sm font-medium text-gray-700 ">
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={user?.email || ''}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 disabled: "
                  />
                </div>
              </div>
            </div>

            {/* Actions Button */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-red-700 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Saving... ' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
