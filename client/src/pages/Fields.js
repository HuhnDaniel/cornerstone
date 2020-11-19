import React from 'react';

import Header from '../components/Header';
import fields from '../assets/data/fields';

function Fields({ menuStatus, menuToggle }) {
    return (
        <main onClick={menuToggle}>
            <Header menuStatus={menuStatus} textColor={"black"} />
            <h1 className="text-2.5xl mx-8 sm:mx-16 md:mx-32">Fields</h1>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8">
                {
                    fields.map((field, i) => {
                        return (
                            <article className="rounded-md cursor-pointer mx-auto my-4 p-4 h-80 w-80 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105" key={i}>
                                <h3 className="text-xl pb-4">{field.field}</h3>

                                <figure className="flex items-center mx-auto align-middle h-48 w-48">
                                    <img className="w-48" src={field.image} alt={`${field.field}`} />
                                </figure>
                            </article>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Fields;