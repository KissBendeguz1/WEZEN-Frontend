function Header() {
  return (
    <div className="header-container min-h-screen w-64">
      <nav className="sidebar p-5">
        <h1 className="font-serif font-bold text-[2em] tracking-wider pb-4">Wezen</h1>
        <ul className="space-y-3">
          <li className="font-serif ml-5 cursor-pointer font-bold text-[1.8em] tracking-wider pb-2 hover:text-[1.9em]"><a href="">Napló</a></li>
          <li className="font-serif ml-5 cursor-pointer font-bold text-[1.8em] tracking-wider pb-2 hover:text-[1.9em]"><a href="">Recept</a></li>
          <li className="font-serif ml-5 cursor-pointer font-bold text-[1.8em] tracking-wider pb-2 hover:text-[1.9em]"><a href="">Social</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;