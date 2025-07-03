import { createContext, useContext, useEffect, useState } from 'react';
import { getUserProfile, onAuthChange } from '../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cleanUp = onAuthChange((user) => {
      setUser(user);

      if (user) {
        (async () => {
          try {
            const userProfile = await getUserProfile(user.id);
            setProfile(userProfile);
          } catch (error) {
            console.error('Error fetching user profile', error);
          } finally {
            setIsLoading(false);
          }
        })();
      } else {
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      if (typeof cleanUp === 'function') cleanUp();
    };
  }, []);

  const value = {
    user,
    profile,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
