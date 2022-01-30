import React from "react";

function OptionsNav() {
    return (
        <section className="flex-none m-8 w-5/6 sm:w-11/12 md:w-1/3 lg:w-1/4">
            <article className="mb-4">
                <h2 className="text-2xl bg-blue-300 p-2">Discipline Topics</h2>
                <ul className="text-lg">
                    <li className="p-2">Disciplines</li>
                    <li className="p-2">Sub-Disciplines</li>
                </ul>
            </article>
            <article>
                <h2 className="text-2xl bg-blue-300 p-2">Partner Topics</h2>
                <ul className="text-lg">
                    <li className="p-2">Partners</li>
                    <li className="p-2">Projects</li>
                </ul>
            </article>
        </section>
    );
}

export default OptionsNav;