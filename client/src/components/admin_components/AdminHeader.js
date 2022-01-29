import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
    function handleLogout(e) {
        e.preventDefault();
        console.log("This will do something when I add login functionality");
    }

    return (
        <header className="flex flex-col md:flex-row py-4 md:px-8 text-2xl md:text-xl lg:text-2.5xl items-center bg-blue-300">
            <h1 className="flex-1">Cornerstone Collaborative Admin Page</h1>
            <nav className="flex-1 grid grid-cols-3 text-center text-xl">
                <h2 className="p-1">Welcome</h2>
                <Link to={process.env.PUBLIC_URL + '/'} className="p-1 underline">Main Site</Link>
                <Link to={window.location.origin} onClick={handleLogout} className="p-1 underline">Log Out</Link>
            </nav>
        </header>
    );
}

export default AdminHeader;