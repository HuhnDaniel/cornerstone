import React, { useState } from 'react';

function Header() {
    const [menuStatus, setMenuStatus] = useState(false)

    function menuToggle(e) {
        e.preventDefault();

        console.log(menuStatus);
        if (menuStatus) {
            setMenuStatus(false);
        } else {
            setMenuStatus(true);
        }
    }

    return (
        <header className="flex flex-col m-4 text-white items-center">
            <h1 className="text-5xl">CORNERSTONE</h1>
            <h2 className="text-2.5xl">ART &amp; CRAFT COLLECTIVE</h2>
            <button className="text-2.5xl" onClick={menuToggle} data-toggle="hidden">☰</button>
            {
                menuStatus ? (
                    <div className="flex flex-col text-2.5xl items-center">
                        <h1>People</h1>
                        <h1>Projects</h1>
                        <h1>Fields</h1>
                        <h1>Contact</h1>
                    </div>
                ) : (
                    null
                )
            }
        </header>
    );
}

export default Header;