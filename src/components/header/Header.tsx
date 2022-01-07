import Logo from "./Logo"
import Nav from "./nav/Nav"
import SearchBar from "./SearchBar"

function Header() {
    return (
        <div className="shadow-sm bg-white sticky top-0 z-50">
            <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto items-center'>
                <Logo />
                <SearchBar />
                <Nav />
            </div>
        </div>
    )
}

export default Header
