import React from "react";
import { Link } from "react-router-dom";

function OptionsNav({ hidden }) {
    return (
        <section className={`${hidden} flex-none m-8 w-5/6 sm:w-11/12 md:w-1/3 lg:w-1/4`}>
            <article className="mb-4">
                <h2 className="text-2xl bg-blue-300 p-2">Discipline Topics</h2>
                <ul className="text-lg">
                    <li className="p-2">
                        <Link to={window.location.host.split(".")[0] === "admin" ? "/disciplines" : "/admin/disciplines"}>Disciplines</Link>
                    </li>
                    <li className="p-2">
                        <Link to={window.location.host.split(".")[0] === "admin" ? "/sub-disciplines" : "/admin/sub-disciplines"}>Sub-Disciplines</Link>
                    </li>
                </ul>
            </article>
            <article>
                <h2 className="text-2xl bg-blue-300 p-2">Partner Topics</h2>
                <ul className="text-lg">
                    <li className="p-2">
                        <Link to={window.location.host.split(".")[0] === "admin" ? "/partners" : "/admin/partners"}>Partners</Link>
                    </li>
                    <li className="p-2">
                        <Link to={window.location.host.split(".")[0] === "admin" ? "/projects" : "/admin/projects"}>Projects</Link>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default OptionsNav;