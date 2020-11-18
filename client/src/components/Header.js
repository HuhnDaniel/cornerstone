import React from 'react';
import { Link } from "react-router-dom";

function Header({ menuStatus, textColor }) {
    // const [menuStatus, setMenuStatus] = useState(false)

    // function menuToggle(e) {
    //     e.preventDefault();

    //     console.log(e.target.tagName);
    //     if (menuStatus) {
    //         setMenuStatus(false);
    //     } else if (e.target.tagName === 'BUTTON') {
    //         setMenuStatus(true);
    //     }
    // }

    return (
        <header className={`flex flex-col m-4 text-2.5xl text-${textColor} items-center`}>
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