import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Headar';
import Home from './pages/Home';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Contests from './pages/Contests';
import Skills from './pages/Skills';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import References from './pages/References';
import Books from './pages/Books';
import Update from './pages/Update';
import Error from './pages/Error'; 
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { initDynamicFavicon, setNotificationCount, updateFavicon } from './utils/dynamicFavicon';

function App() {
  const [notificationCount, setLocalNotificationCount] = useState(() => {
    return parseInt(localStorage.getItem('notificationCount') || '0');
  });

  const updateNotificationCount = useCallback((count) => {
    setLocalNotificationCount(count);
    localStorage.setItem('notificationCount', count.toString());
    setNotificationCount(count);
  }, []);

  // Theme change optimization with debounce
  const handleThemeChange = useCallback((e) => {
    document.documentElement.classList.toggle('dark', e.matches);
    // Debounce favicon update
    requestAnimationFrame(() => updateFavicon());
  }, []);

  useEffect(() => {
    const cleanup = initDynamicFavicon();
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Initial notification check
    const storedCount = parseInt(localStorage.getItem('notificationCount') || '0');
    if (storedCount > 0) {
      setNotificationCount(storedCount);
    }

    darkModeMediaQuery.addListener(handleThemeChange);

    return () => {
      darkModeMediaQuery.removeListener(handleThemeChange);
      cleanup();
    };
  }, [handleThemeChange]);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen max-w-4xl mx-auto bg-white text-black font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update" element={<Update />} />
            <Route path="/education" element={<Education />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/references" element={<References />} />
            <Route path="/books" element={<Books />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<Error />} /> {/* Add fallback route */}
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;