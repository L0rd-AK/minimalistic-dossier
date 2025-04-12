import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white p-4 flex justify-between md:justify-end items-center z-10 shadow-sm">
      <button 
        className="md:hidden" 
        onClick={() => setMenuOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav className="hidden md:block">
        <ul className="flex space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors px-2">Home</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/projects" className="hover:text-blue-600 transition-colors px-2">Projects</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/activities" className="hover:text-blue-600 transition-colors px-2">Activities</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/blogs" className="hover:text-blue-600 transition-colors px-2">Blogs</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/books" className="hover:text-blue-600 transition-colors px-2">Books</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/courses" className="hover:text-blue-600 transition-colors px-2">Courses</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/contests" className="hover:text-blue-600 transition-colors px-2">Contests</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/skills" className="hover:text-blue-600 transition-colors px-2">Skills</Link>
        </ul>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setMenuOpen(false)}></div>
      )}

      <div
        className={`fixed inset-0 bg-white z-30 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 flex flex-col justify-center items-center`}
      >
        <button 
          className="absolute top-4 right-4" 
          onClick={() => setMenuOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="flex flex-col space-y-6 text-lg text-gray-600 text-center">
          <Link to="/" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/activities" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Activities</Link>
          <Link to="/blogs" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/books" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Books</Link>
          <Link to="/courses" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/contests" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contests</Link>
          <Link to="/skills" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Skills</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;