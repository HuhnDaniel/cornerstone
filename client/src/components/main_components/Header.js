import React from 'react';
import { Link } from "react-router-dom";

function Header({ menuStatus, aboutUsToggle, isHome, isContact }) {
    return (
        <header className={"flex flex-col md:flex-row my-4 md:mx-8 text-2.5xl md:text-2xl lg:text-2.5xl items-center"}>
			<Link to={"/"} className="flex-1">
                <img className="hidden sm:block pt-2 h-24" src={ isHome || isContact ? "/images/cornerstone-white.svg" : "/images/cornerstone-fullColor.svg" } />
                <img className="sm:hidden py-2 h-24" src={ isHome || isContact ? "/images/cornerstone-white-icon.svg" : "/images/cornerstone-fullColor-icon.svg" } />
			</Link>
            {
                menuStatus ? (
                    <nav className="md:hidden flex flex-col items-center">
                        <button>⨯</button>
                        {
                            isHome ? ( <button onClick={aboutUsToggle} className="focus:outline-none">About Us</button> ) : ( <Link to={"/"}>Home</Link> )
                        }
                        <Link to={"/partners/"} data-id="partners">Partners</Link>
                        <Link to={"/disciplines/"} data-id="disciplines">Disciplines</Link>
                    </nav>
                ) : (
                    <button className="md:hidden">☰</button>
                )
            }
            <nav className="hidden md:grid grid-cols-3 flex-1 text-center">
                {
                    isHome ? ( <button onClick={aboutUsToggle} className="focus:outline-none">About Us</button> ) : ( <Link to={"/"}>Home</Link> )
                }
                <Link to={"/partners/"} data-id="partners">Partners</Link>
                <Link to={"/disciplines/"} data-id="disciplines">Disciplines</Link>
            </nav>
        </header>
    );
}

export default Header;