import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky max-w-4xl mx-auto top-0 bg-white p-4 flex flex-col md:flex-row justify-end items-center z-10 shadow-sm">
      <button 
        className="md:hidden self-end mb-2" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      <nav className={`${menuOpen ? 'block' : 'hidden'} md:block w-full`}>
        <ul className="flex flex-col md:flex-row md:space-x-2 md:justify-end space-y-2 md:space-y-0 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors px-2">Home</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/education" className="hover:text-blue-600 transition-colors px-2">Education</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/courses" className="hover:text-blue-600 transition-colors px-2">Courses</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/contests" className="hover:text-blue-600 transition-colors px-2">Contests</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/skills" className="hover:text-blue-600 transition-colors px-2">Skills</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/activities" className="hover:text-blue-600 transition-colors px-2">Activities</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/projects" className="hover:text-blue-600 transition-colors px-2">Projects</Link>
          <span className="hidden md:inline">/</span>
          <Link to="/references" className="hover:text-blue-600 transition-colors px-2">References</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;