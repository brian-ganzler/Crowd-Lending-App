import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">Crowd Funding</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/create-investor">Invest</Link></li>
            </ul>
        </nav>
    );
}