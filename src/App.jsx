import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
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

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <footer>
        {/* footer content */}
        <Footer />
      </footer>
    </div>
  );
};

export default App;
