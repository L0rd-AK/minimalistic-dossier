import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky max-w-4xl mx-auto top-0 bg-white  p-4 flex justify-end items-center z-10">
      <nav>
        <ul className="flex space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors px-2">Home</Link>/
          <Link to="/education" className="hover:text-blue-600 transition-colors px-2">Education</Link>/
          <Link to="/courses" className="hover:text-blue-600 transition-colors px-2">Courses</Link>/
          <Link to="/contests" className="hover:text-blue-600 transition-colors px-2">Contests</Link>/
          <Link to="/skills" className="hover:text-blue-600 transition-colors px-2">Skills</Link>/
          <Link to="/activities" className="hover:text-blue-600 transition-colors px-2">Activities</Link>/
          <Link to="/projects" className="hover:text-blue-600 transition-colors px-2">Projects</Link>/
          <Link to="/references" className="hover:text-blue-600 transition-colors px-2">References</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;