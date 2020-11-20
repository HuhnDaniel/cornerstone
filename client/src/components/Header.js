import React from 'react';
import { Link } from "react-router-dom";

function Header({ menuStatus }) {
    return (
        <header className={`flex flex-col m-4 text-2.5xl items-center`}>
			<Link to={"/"}>
            	<h1 className="text-5xl">CORNERSTONE</h1>
            	<h2 className="-mt-4">ART &amp; CRAFT COLLECTIVE</h2>
			</Link>
            <button>☰</button>
            {
                menuStatus ? (
                    <div className="flex flex-col items-center">
						<Link to={"/"}>Home</Link>
                        <Link to={"/people/"}>People</Link>
                        <Link to={"/projects/"}>Projects</Link>
                        <Link to={"/fields/"}>Fields</Link>
                        <Link to={"/contact/"}>Contact</Link>
                    </div>
                ) : (
                    null
                )
            }
        </header>
    );
}

export default Header;