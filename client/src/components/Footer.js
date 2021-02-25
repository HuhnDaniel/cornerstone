import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="absolute min-w-full bottom-0 text-xl my-2 mb-8">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 grid grid-cols-4">
                    <Link to={"/"} className="text-center">Home</Link>
                    <Link to={"/partners/"} className="text-center">Partners</Link>
                    <Link to={"/disciplines/"} className="text-center">Disciplines</Link>
                    <Link to={"/contact/"} className="text-center">Contact</Link>
                </div>
                <h2 className="flex-1 text-center md:text-right md:pr-8">&#169; 2020 Cornerstone ACC LLC</h2>
            </div>
		</footer>
	);
}

export default Footer;