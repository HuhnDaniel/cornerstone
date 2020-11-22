import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="absolute min-w-full bottom-0 text-xl my-2">
			<div className="grid grid-cols-5">
				<Link to={"/"} className="text-center">Home</Link>
                <Link to={"/people/"} className="text-center">People</Link>
                <Link to={"/projects/"} className="text-center">Projects</Link>
                <Link to={"/fields/"} className="text-center">Fields</Link>
                <Link to={"/contact/"} className="text-center">Contact</Link>
            </div>
			<h2 className="text-center">&#169; 2020 Cornerstone A&amp;C LLC</h2>
		</footer>
	);
}

export default Footer;