import './style.css';
import { Link, NavLink } from 'react-router-dom';



export const Menu = () => {
  return (
    <nav >
      <ul className="menu">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" state={'this is state from about'}>About</Link></li>
        <li><NavLink to="/posts" className={({ isActive }) => isActive ? "active" : ""}>posts</NavLink></li>
        <li><Link to="/posts/10">posts 10</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
      </ul>
    </nav >
  );
};