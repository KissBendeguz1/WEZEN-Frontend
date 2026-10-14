import { NavLink } from 'react-router-dom'
import NavbarProfileCard from './NavbarProfileCard'

const links = [
  { to: '/naplo', label: 'Napló' },
  { to: '/recept', label: 'Recept' },
  { to: '/social', label: 'Social' },
]

function Header() {
  return (
    <div className="header-container min-h-screen w-64">
      <nav className="sidebar relative p-5">
        <h1 className="WezenTitle">Wezen</h1>
        <ul className="space-y-3">
          {links.map(({ to, label }) => (
            <li key={to} className="font-serif text-left ml-8 font-bold text-[1.3em] tracking-wider pb-0.5 hover:text-[1.35em]">
              <NavLink to={to} className={({ isActive }) => isActive ? 'underline' : ''}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
          <NavbarProfileCard/>
      </nav>
    </div>
  );
}

export default Header;
