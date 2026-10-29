import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <span className="logo">Your Name</span>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
