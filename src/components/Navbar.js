import React from "react";

import "../styles/components/navbar.css";

const Navbar = ({ onNext, onPrevious }) => {
    return (
        <nav className='navbar'>
            <button onClick={onPrevious}>Previous screen</button>
            <button onClick={onNext}>Next screen</button>
        </nav>
    );
};

export default Navbar;
