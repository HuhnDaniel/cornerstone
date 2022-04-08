import React, { useEffect, useState } from 'react';

function AdminAddType({ topic, updateItemDetails, handleAdd, disciplineList, partnerList, subDisciplineList }) {

    switch (topic) {
        case 'disciplines':
            return (
                <form className="flex flex-col">
                    <input type="text" id="name" name="name" placeholder="Name" onChange={ updateItemDetails } className="px-2 py-1 m-4 border border-gray-400 rounded-md" />

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="description" className="flex-none p-1 mr-1">Description:</label>
                        <textarea id="description" name="description" onChange={ updateItemDetails } className="flex-1 px-2 py-1 h-36 resize-y border border-gray-400 rounded-md" />
                    </article>

                    <div>
                        <button type="button" onClick={ handleAdd } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300">Add New</button>
                    </div>
                </form>
            );
        case 'sub-disciplines':
            return (
                <form className="flex flex-col">
                    <input type="text" id="name" name="name" placeholder="Name" onChange={ updateItemDetails } className="px-2 py-1 m-4 border border-gray-400 rounded-md" />

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="discipline" className="flex-none p-1 mr-1">Discipline:</label>
                        <select id="discipline" name="discipline" className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                            {
                                disciplineList.map((discipline, i) => {
                                    return (
                                        <option value={ discipline.id } key={ i }>{ discipline.name }</option>
                                    )
                                })
                            }
                        </select>
                    </article>

                    <div>
                        <button type="button" onClick={ handleAdd } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300">Add New</button>
                    </div>
                </form>
            );
        case 'partners':
            return (
                <form className="flex flex-col">
                    <input type="text" id="name" name="name" placeholder="Name" onChange={ updateItemDetails } className="px-2 py-1 m-4 border border-gray-400 rounded-md" />

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="email" className="flex-none p-1 mr-1">Email:</label>
                        <input type="email" id="email" name="email" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="about" className="flex-none p-1 mr-1">About:</label>
                        <textarea id="about" name="about" onChange={ updateItemDetails } className="flex-1 px-2 py-1 h-36 resize-y border border-gray-400 rounded-md" />
                    </article>

                    <div>
                        <button type="button" onClick={ handleAdd } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300">Add New</button>
                    </div>
                </form>
            );
        case 'projects':
            return (
                <form className="flex flex-col">
                    <input type="text" id="name" name="name" placeholder="Name" onChange={ updateItemDetails } className="px-2 py-1 m-4 border border-gray-400 rounded-md" />

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="location" className="flex-none p-1 mr-1">Location:</label>
                        <input type="text" id="location" name="location" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="client" className="flex-none p-1 mr-1">Client:</label>
                        <input type="text" id="client" name="client" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="overview" className="flex-none p-1 mr-1">Overview:</label>
                        <textarea id="overview" name="overview" onChange={ updateItemDetails } className="flex-1 px-2 py-1 h-36 resize-y border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="timeframe" className="flex-none p-1 mr-1">Project Time-Frame:</label>
                        <input type="text" id="timeframe" name="timeframe" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="awards" className="flex-none p-1 mr-1">Awards:</label>
                        <input type="text" id="awards" name="awards" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="company" className="flex-none p-1 mr-1">Company:</label>
                        <input type="text" id="company" name="company" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="link" className="flex-none p-1 mr-1">Project Website:</label>
                        <input type="text" id="link" name="link" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="role" className="flex-none p-1 mr-1">Role:</label>
                        <input type="text" id="role" name="role" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="partnerId" className="flex-none p-1 mr-1">Partner:</label>
                        <select id="partnerId" name="partnerId" className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                            {
                                partnerList.map((partner, i) => {
                                    return (
                                        <option value={ partner.id } key={ i }>{ partner.name }</option>
                                    )
                                })
                            }
                        </select>
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="subDiscipline" className="flex-none p-1 mr-1">Sub-Discipline:</label>
                        <select id="subDiscipline" name="subDiscipline" className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                            {
                                subDisciplineList.map((subDiscipline, i) => {
                                    return (
                                        <option value={ subDiscipline.id } key={ i }>{ subDiscipline.name }</option>
                                    )
                                })
                            }
                        </select>
                    </article>

                    <div>
                        <button type="button" onClick={ handleAdd } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300">Add New</button>
                    </div>
                </form>
            );
        default:
            return null;
    }
}

export default AdminAddType;