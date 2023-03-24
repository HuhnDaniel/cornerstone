import React from 'react';
import { Link } from 'react-router-dom';

import AddTypeFields from './AddTypeFields';

function AdminAddType({ adminPath, topic, topicString, updateItemDetails, handleAdd, disciplineList, partnerList, subDisciplineList, buttonDisabled, emailFormatMsg }) {
    return (
    <main className="flex-1 m-8 text-2xl">
                    <h1 className="p-1 m-4">New { topicString }</h1>

                    <form id="add-item" className="flex flex-col">
                        <input type="text" id="name" name="name" placeholder="Name" onChange={ updateItemDetails } className="px-2 py-1 m-4 border border-gray-400 rounded-md" />
                        <AddTypeFields topic={ topic } updateItemDetails={ updateItemDetails } disciplineList={ disciplineList } partnerList={ partnerList } subDisciplineList={ subDisciplineList } />
                        
                        <div>
                            <p className={`text-center text-red-500 text-lg mt-2 ${emailFormatMsg}`}>Invalid Email format</p>
                            <button type="button" onClick={ handleAdd } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300 disabled:bg-slate-200" disabled={ buttonDisabled }>Add New</button>
                            <Link to={ `${ adminPath }${ topic }` } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300">Cancel</Link>
                        </div>
                    </form>
                </main>
    )
}

export default AdminAddType;