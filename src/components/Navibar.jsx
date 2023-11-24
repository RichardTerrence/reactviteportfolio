import { Link, NavLink } from "react-router-dom";
import "./Navibar.css";
import { useState } from "react";
export default function Navibar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="title">
          Rex
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skill">Skill</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/buligitdribulig">BuligItdriBulig</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
