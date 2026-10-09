function NavbarProfileCard() {
    return (
    <div className="flex mt-auto ml-[-4%] bg-[var(--box-fill-color))] w-50 h-50 rounded-2xl p-2">
        <img src="https://via.placeholder.com/100" alt="Profile" className="w-10 h-10 rounded-full ml-2 mt-2"/>
        <h1 className="Profile-Name">John Doe</h1>
        <p className="Description">Description</p>
    </div>
    )
}

export default NavbarProfileCard;