import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import SignIn from './pages/SignIn';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import UnAuthenticatedRoute from './components/UnAuthenticatedRoute';
import ArticleEditorPage from './pages/ArticleEditorPage';
import ManageArticlePage from './pages/ManageArticlePage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <div>
        {/* header */}
        <Header />
        <main>
          {/* routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<Article />} />

            {/* unauthenticated routes (redirect home if login) */}

            <Route
              path="/signin"
              element={
                <UnAuthenticatedRoute>
                  <SignIn />
                </UnAuthenticatedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <UnAuthenticatedRoute>
                  <SignUpPage />
                </UnAuthenticatedRoute>
              }
            />

            {/* protected route */}
            <Route
              path="/editor"
              element={
                <ProtectedRoute>
                  <ArticleEditorPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editor/:id"
              element={
                <ProtectedRoute>
                  <ArticleEditorPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-articles"
              element={
                <ProtectedRoute>
                  <ManageArticlePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <footer>
          {/* footer content */}
          <Footer />
        </footer>
      </div>
    </AuthProvider>
  );
};

export default App;
