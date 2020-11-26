import React from 'react';
import { Link } from "react-router-dom";

function Header({ menuStatus, isHome }) {
    return (
        <header className={"flex flex-col md:flex-row my-4 md:mx-8 text-2.5xl md:text-2xl lg:text-2.5xl items-center"}>
			<Link to={"/"} className="flex-1">
            	<h1 className="text-5xl">CORNERSTONE</h1>
            	<h2 className="text-2.5xl -mt-4">ART &amp; CRAFT COLLECTIVE</h2>
			</Link>
            {
                menuStatus ? (
                    <nav className="md:hidden flex flex-col items-center">
                        <button>⨯</button>
                        {
                            isHome ? ( <Link to={"/"}>Home</Link> ) : ( <h1>About Us</h1> )
                        }
                        <Link to={"/people/"}>Partners</Link>
                        <Link to={"/fields/"}>Disciplines</Link>
                    </nav>
                ) : (
                    <button className="md:hidden">☰</button>
                )
            }
            <nav className="hidden md:grid grid-cols-3 flex-1 text-center">
                {
                    isHome ? ( <h1>About Us</h1> ) : ( <Link to={"/"}>Home</Link> )
                }
                <Link to={"/people/"}>Partners</Link>
                <Link to={"/fields/"}>Disciplines</Link>
            </nav>
        </header>
    );
}

export default Header;