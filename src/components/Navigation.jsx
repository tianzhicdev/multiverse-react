import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shopping" className="text-blue-600 hover:text-blue-800 hover:underline">
            Shopping
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation; 