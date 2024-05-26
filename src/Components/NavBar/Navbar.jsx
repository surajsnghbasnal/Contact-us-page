import React from "react";
import logo from "../../Assets/Logo.png"
import navbarStyle from "./navBar.module.css"


const Navbar = () => {
    return <nav className="flex justify-between p-4 items-center shadow-md">
        <img className={`${navbarStyle.logo}  object-cover`} src={logo} alt="logo" />
        <ul className="flex gap-6 font-sans">
            <li><a href="#" className="text-lg  hover:underline hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-lg  hover:underline hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-lg  hover:underline hover:text-blue-500">Contact</a></li>
        </ul>
    </nav>;
};

export default Navbar;
