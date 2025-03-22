import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center z-10">
      <h1 className="text-2xl font-bold">Amit Kumar Ghosh</h1>
      <nav>
        <ul className="flex space-x-4 text-sm">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/education" className="hover:underline">Education</Link></li>
          <li><Link to="/courses" className="hover:underline">Courses</Link></li>
          <li><Link to="/contests" className="hover:underline">Contests</Link></li>
          <li><Link to="/skills" className="hover:underline">Skills</Link></li>
          <li><Link to="/activities" className="hover:underline">Activities</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/references" className="hover:underline">References</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;