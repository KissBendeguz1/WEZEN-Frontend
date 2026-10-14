function NavbarProfileCard() {
    return (
    <div className="grid absolute bottom-2 left-3 bg-[var(--box-fill-color)] w-50 h-50 rounded-2xl p-2 text-[var(--color-text)]">
        <div className="grid grid-cols-2 grid-flow-col grid-rows-1">
            <img src="https://via.placeholder.com/100" alt="Profile" className="w-10 h-10 rounded-full ml-2 mt-2"/>
            <div className="">
                <h1 className="Profile-Name">John Doe</h1>
                <p className="Description">Description</p>
            </div>
        </div>
        <div className="grid grid-cols-1 grid-flow-col grid-rows-2">
            <div>
                <div className="grid grid-cols-2 grid-flow-col grid-rows-1">
                    <h3 className="text-left">Calories</h3>
                    <p className="text-right">1000/2000</p>
                </div>
                <hr className="h-1.5 w-full bg-linear-to-r from-orange-500 from-50% to-gray-500 to-50% rounded-full border-0" />
            </div>
            <div>
                <div className="grid grid-cols-2 grid-flow-col grid-rows-1">
                    <h3 className="text-left">Water</h3>
                    <p className="text-right">1.85L/2L</p>
                </div>
                <hr className="h-1.5 w-full bg-linear-to-r from-blue-500 from-90% to-gray-500 to-92% rounded-full border-0" />
            </div>
        </div>
        <a className="text-[0.8em] p-0 m-0" href="/profil">Profile</a>
    </div>
    )
}

export default NavbarProfileCard;