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

                    <div>
                        <button type="button" onClick={ handleAdd } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300">Add New</button>
                    </div>
                </form>
            );
        case 'projects':
            return (
                <form className="flex flex-col">
                    <input type="text" id="name" name="name" placeholder="Name" onChange={ updateItemDetails } className="px-2 py-1 m-4 border border-gray-400 rounded-md" />

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