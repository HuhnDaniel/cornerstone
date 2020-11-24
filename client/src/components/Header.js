import React from 'react';
import { Link } from "react-router-dom";

function Header({ menuStatus }) {
    return (
        <header className={"flex flex-col md:flex-row my-4 md:mx-8 text-2.5xl md:text-2xl lg:text-2.5xl items-center"}>
			<Link to={"/"} className="flex-auto">
            	<h1 className="text-5xl">CORNERSTONE</h1>
            	<h2 className="text-2.5xl -mt-4">ART &amp; CRAFT COLLECTIVE</h2>
			</Link>
            {
                menuStatus ? (
                    <div className="md:hidden flex flex-col items-center">
                        <button>⨯</button>
						<Link to={"/"}>Home</Link>
                        <Link to={"/people/"}>People</Link>
                        <Link to={"/projects/"}>Projects</Link>
                        <Link to={"/fields/"}>Fields</Link>
                        <Link to={"/contact/"}>Contact</Link>
                    </div>
                ) : (
                    <button className="md:hidden">☰</button>
                )
            }
            <nav className="hidden md:grid grid-cols-4 flex-auto">
				<Link to={"/"}>Home</Link>
                <Link to={"/people/"}>People</Link>
                <Link to={"/projects/"}>Projects</Link>
                <Link to={"/fields/"}>Fields</Link>
                {/* <Link to={"/contact/"}>Contact</Link> */}
            </nav>
        </header>
    );
}

export default Header;