import './App.css'
import NavbarProfileCard from './NavbarProfileCard'

function Header() {
  return (
    <div className="header-container min-h-screen w-64">
      <nav className="sidebar p-5">
        <h1 className="WezenTitle">Wezen</h1>
        <ul className="space-y-3">
          <li className="font-serif text-left ml-8  cursor-pointer font-bold text-[1.3em] tracking-wider pb-0.5 hover:text-[1.35em]">
            <a href="">Napló</a>
          </li>
          <li className="font-serif text-left ml-8 cursor-pointer font-bold text-[1.3em] tracking-wider pb-0.5 hover:text-[1.35em]">
            <a href="">Recept</a>
          </li>
          <li className="font-serif text-left ml-8 cursor-pointer font-bold text-[1.3em] tracking-wider pb-0.5 hover:text-[1.35em]">
            <a href="">Social</a>
          </li>
        </ul>
        <NavbarProfileCard/>
      </nav>
    </div>
  );  
} 

export default Header;