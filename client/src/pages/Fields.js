import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import fields from '../assets/data/fields';

function Fields({ menuStatus, menuToggle }) {
    return (
        <main onClick={menuToggle} className="absolute min-h-full min-w-full">
            <Header menuStatus={menuStatus} />
            <h1 className="text-2.5xl mx-16 sm:mx-32">Fields</h1>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 pb-24">
                {
                    fields.map((field, i) => {
                        return (
                            <article className={`bg-${field.image} bg-cover rounded-md text-white cursor-pointer mx-auto my-4 h-72 w-72 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105`} key={i}>
                                <div className="bg-black p-4 rounded-t bg-opacity-30">
                                    <h3 className="text-2xl">{field.field}</h3>
                                </div>
                                {field.artistCredit}
                            </article>
                        )
                    })
                }
            </section>

			<Footer />
        </main>
    );
}

export default Fields;