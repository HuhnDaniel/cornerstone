import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
    function handleLogout(e) {
        e.preventDefault();
        console.log("This will do something when I add login functionality");
    }

    return (
        <header className="flex flex-col md:flex-row py-4 md:px-8 text-2xl md:text-xl lg:text-2.5xl items-center bg-blue-300">
            <h1 className="flex-1 text-center">
                <Link to={ window.location.host.split(".")[0] === "admin" ? "/" : "/admin" }>Cornerstone Collaborative Admin Page</Link>
            </h1>
            <nav className="flex-1 grid grid-cols-3 text-center text-xl">
                <h2 className="p-1">Welcome</h2>

                {
                    window.location.host.split(".")[0] === "admin" ?
                    (
                        <a href="https://www.cornerstone-collaborative.com" className="p-1 underline">Main Site</a>
                    ) : (
                        <Link to="/" className="p-1 underline">Main Site</Link>
                    )
                }
                
                <Link to={ window.location.host.split(".")[0] === "admin" ? "/" : "/admin" } onClick={ handleLogout } className="p-1 underline">Log Out</Link>
            </nav>
        </header>
    );
}

export default AdminHeader;