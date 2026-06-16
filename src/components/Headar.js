import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white p-4 flex justify-between md:justify-end items-center z-10 shadow-sm">
      <div className="md:hidden flex items-center space-x-4">
        <div className="text-blue-600 font-bold text-lg">
          💻
        </div>
        <button
          onClick={() => setMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav className="hidden md:block">
        <ul className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-xs lg:text-sm text-gray-600">
          <Link to="/" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/work-experience" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Work Experience</Link>
          <Link to="/publications" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Publications</Link>
          <Link to="/projects" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Projects</Link>
          <Link to="/activities" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Activities</Link>
          <Link to="/blogs" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Blogs</Link>
          <Link to="/books" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Books</Link>
          <Link to="/courses" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Courses</Link>
          <Link to="/contests" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Contests</Link>
          <Link to="/skills" className="whitespace-nowrap before:content-['/'] before:mr-2 before:text-gray-300 first:before:content-none hover:text-blue-600 transition-colors">Skills</Link>
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
          <Link to="/work-experience" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Work Experience</Link>
          <Link to="/publications" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Publications</Link>
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