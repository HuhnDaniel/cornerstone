import React from "react";

function AddTypeFields({ topic, updateItemDetails, disciplineList, partnerList, subDisciplineList }) {
    switch (topic) {
        case 'disciplines':
            return (
                <article className="flex text-xl my-2 mx-4">
                    <label htmlFor="description" className="flex-none p-1 mr-1">Description:</label>
                    <textarea id="description" name="description" onChange={ updateItemDetails } className="flex-1 px-2 py-1 h-36 resize-y border border-gray-400 rounded-md" />
                </article>     
            );
        case 'sub-disciplines':
            return (
                <article className="flex text-xl my-2 mx-4">
                    <label htmlFor="discipline" className="flex-none p-1 mr-1">Discipline:</label>
                    <select id="discipline" name="DisciplineId" className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                        <option value={ 0 }>Select an option</option>
                        {
                            disciplineList.map((discipline, i) => {
                                return (
                                    <option value={ discipline.id } key={ i }>{ discipline.name }</option>
                                )
                            })
                        }
                    </select>
                </article>  
            );
        case 'partners':
            return (
                <div>
                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="email" className="flex-none p-1 mr-1">Email:</label>
                        <input type="email" id="email" name="email" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="about" className="flex-none p-1 mr-1">About:</label>
                        <textarea id="about" name="about" onChange={ updateItemDetails } className="flex-1 px-2 py-1 h-36 resize-y border border-gray-400 rounded-md" />
                    </article>
                </div>   
            );
        case 'projects':
            return (
                <div>
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
                        <label htmlFor="partner" className="flex-none p-1 mr-1">Partner:</label>
                        <select id="partner" name="PartnerId" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                            <option value={ 0 }>Select an option</option>
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
                        <select id="subDiscipline" name="SubDisciplineId" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                            <option value={ 0 }>Select an option</option>
                            {
                                subDisciplineList.map((subDiscipline, i) => {
                                    return (
                                        <option value={ subDiscipline.id } key={ i }>{ subDiscipline.name }</option>
                                    )
                                })
                            }
                        </select>
                    </article>
                </div>   
            );
        case 'users':
            return (
                <div>
                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="email" className="flex-none p-1 mr-1">Email:</label>
                        <input type="email" id="email" name="email" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="password" className="flex-none p-1 mr-1">Password:</label>
                        <input type="password" id="password" name="password" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                    </article>

                    <article className="flex text-xl my-2 mx-4">
                        <label htmlFor="rank" className="flex-none p-1 mr-1">Rank:</label>
                        <select id="rank" name="rank" onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                            <option value="user">Select an option</option>
                            <option value="partner">Partner</option>
                            <option value="admin">Admin</option>
                        </select>
                    </article>
                </div>      
            )
        default:
            return null;
    }
}

export default AddTypeFields;