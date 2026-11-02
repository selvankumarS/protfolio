
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const navigate = useNavigate();

    // const [menuOpen, setMenuOpen] = useState(false);

    function GoToPage(page) {
        navigate(page);
        // setMenuOpen(false);
    }

    return (
        <nav className="navbar">

            <h2 className="logo" onClick={() => GoToPage("/")}>
                Selvakumar<span>.</span>
            </h2>

            <div className= "nav-links" >

                <button onClick={() => GoToPage("/")}>Home</button>

                <button onClick={() => GoToPage("/about")}>About</button>

                <button onClick={() => GoToPage("/skills")}>Skills</button>

                <button onClick={() => GoToPage("/project")}>Projects</button>

                <button onClick={() => GoToPage("/contact")}>Contact</button>

            </div>

            

        </nav>
    );
}

export default Navbar;
