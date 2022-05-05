import React from 'react';
import { Link } from 'react-router-dom';

function AdminEditType({ adminPath, topic, topicString, itemDetails, updateItemDetails, disciplineList, partnerList, subDisciplineList, handleEdit, buttonDisabled, emailFormatMsg, currentUser }) {
    return (
        <main className="flex-1 m-8 text-2xl">
            <form id="edit-item" className="flex flex-col">
                <input type="text" id="name" name="name" placeholder={ "Input " + topicString + " name" } value={ itemDetails.name ? itemDetails.name : "" } onChange={ updateItemDetails } className="px-2 py-1 mb-4 mx-4 border border-gray-400 rounded-md" />
                {
                    Object.keys(itemDetails).map((key, i) => {
                        switch (key) {
                            // case 'artistName':
                            // case 'artistCredit':
                            case 'awards':
                            case 'client':
                            case 'company':
                            case 'link':
                            case 'location':
                            case 'role':
                            case 'timeframe':
                                return (
                                    <article key={ i } className="flex text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="flex-none p-1 mr-1">{ key[0].toUpperCase() + key.slice(1) }:</label>
                                        <input type="text" id={ key } name={ key } value={ itemDetails[key] ? itemDetails[key] : "" } onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                                    </article>
                                );
                            case 'email':
                                return (
                                    <article key={ i } className="flex text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="flex-none p-1 mr-1">Email:</label>
                                        <input type="email" id={ key } name={ key } value={ itemDetails[key] ? itemDetails[key] : "" } onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md" />
                                    </article>
                                );
                            case 'about':
                            case 'description':
                            case 'overview':
                                return (
                                    <article key={ i } className="flex text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="flex-none p-1 mr-1">{ key[0].toUpperCase() + key.slice(1) }:</label>
                                        <textarea id={ key } name={ key } value={ itemDetails[key] ? itemDetails[key] : "" } onChange={ updateItemDetails } className="flex-1 px-2 py-1 h-36 resize-y border border-gray-400 rounded-md" />
                                    </article>
                                );
                            case 'rank':
                                return (
                                    <article key={ i } className="flex text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="flex-none p-1 mr-1">Rank:</label>
                                        <select id={ key } name={ key } value={ itemDetails[key] || 'user' } onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
                                            <option value="user">Select an option</option>
                                            <option value="partner">Partner</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </article>
                                );
                            case 'DisciplineId':
                                return (
                                    <article key={ i } className="flex text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="flex-none p-1 mr-1">Discipline:</label>
                                        <select id={ key } name={ key } value={ itemDetails[key] || 0 } onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
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
                            case 'PartnerId':
                                return (
                                    <article key={ i } className="flex text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="flex-none p-1 mr-1">Partner:</label>
                                        <select id={ key } name={ key } value={ itemDetails[key] || 0 } onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md w-full">
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
                                );
                            case 'SubDisciplineId':
                                return (
                                    <article key={ i } className="flex text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="flex-none p-1 mr-1">Sub-Discipline:</label>
                                        <select id={ key } name={ key } value={ itemDetails[key] || 0 } onChange={ updateItemDetails } className="flex-1 px-2 py-1 border border-gray-400 rounded-md">
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
                                );
                            default:
                                return (null);
                        }
                    })
                }

                <div>
                    <p className={`text-center text-red-500 text-lg mt-2 ${emailFormatMsg}`}>Invalid Email format</p>
                    <button type="button" onClick={ handleEdit } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300 disabled:bg-slate-200" disabled={ buttonDisabled }>Save Changes</button>
                    {
                        (currentUser.PartnerId === itemDetails.PartnerId) && topic === "users" ? (
                            <Link to={`${ adminPath }users/${ itemDetails.path }/updatePW`} className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300 disabled:bg-slate-200">Change Password</Link>
                        ) : null
                    }
                </div>
            </form>
        </main>
    )
}

export default AdminEditType;
