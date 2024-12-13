import '../styles/NavBar.css'
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="TCE" />
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href ="/">Home</a></li>
                    <li><a href="#about-college">About</a></li>
                    <li><a href="#about-tss">About TSS</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <div className="navbar-right">
                <div className="language">ENG</div>
            </div>
        </header>
    );
};

export default Navbar;
