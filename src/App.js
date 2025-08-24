import React, { useCallback, useEffect } from 'react';
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
import SecretPage from './pages/SecretPage';
import MatrixRain from './components/MatrixRain';
import InteractiveTerminal from './components/InteractiveTerminal';
import FloatingEasterEgg from './components/FloatingEasterEgg';
import RandomJoke from './components/RandomJoke';
import SecretTypingGame from './components/SecretTypingGame';
import './App.css';
import './styles/easterEggs.css';
import { HelmetProvider } from 'react-helmet-async';
import { initDynamicFavicon, setNotificationCount, updateFavicon } from './utils/dynamicFavicon';
import { easterEggManager } from './utils/easterEggs';

function App() {
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

    // Easter egg event listeners
    const handleEasterEggFound = (event) => {
      const { type, emoji } = event.detail;
      if (type === 'floating_egg') {
        easterEggManager.unlockAchievement(`floating_${emoji}`, `Found floating ${emoji}!`);
        easterEggManager.showNotification('🥚 EASTER EGG FOUND! 🥚', `You caught a floating ${emoji}!`);
      } else if (type === 'secret_page') {
        easterEggManager.unlockAchievement('secret_explorer', 'Secret Page Explorer');
        easterEggManager.showNotification('🔍 SECRET DISCOVERED! 🔍', 'You found the secret page!');
      }
    };

    document.addEventListener('easterEggFound', handleEasterEggFound);
    darkModeMediaQuery.addListener(handleThemeChange);

    return () => {
      document.removeEventListener('easterEggFound', handleEasterEggFound);
      darkModeMediaQuery.removeListener(handleThemeChange);
      cleanup();
    };
  }, [handleThemeChange]);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen max-w-4xl mx-auto bg-white text-black font-sans relative">
          <MatrixRain intensity={0.3} speed={50} />
          <InteractiveTerminal />
          <FloatingEasterEgg />
          <RandomJoke />
          <SecretTypingGame />
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
            <Route path="/secret" element={<SecretPage />} />
            <Route path="/🥚" element={<SecretPage />} />
            <Route path="/easter-egg" element={<SecretPage />} />
            <Route path="/konami" element={<SecretPage />} />
            <Route path="*" element={<Error />} /> {/* Add fallback route */}
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;