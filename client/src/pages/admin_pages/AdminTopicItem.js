import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

import API from '../../utils/API';

function AdminTopicItem() {
    const { topic, item } = useParams();
    const topicString = topic.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('-').replace(/[ -]/g, '').slice(0, -1);

    const [itemDetails, setItemDetails] = useState({});
    const [disciplineList, setDisciplineList] = useState([]);
    const [partnerList, setPartnerList] = useState([]);
    const [subDisciplineList, setSubDisciplineList] = useState([]);

    useEffect(() => {
        getItemDetails();

        if (topic === 'sub-disciplines') {
            getSubDisciplineAssociations();
        } else if (topic === 'projects') {
            getProjectAssociations();
        }  
    }, [item]);

    async function getItemDetails() {
        const { data } = await API.getItemByPath(topicString, item);
        
        setItemDetails(data[0]);
    }

    async function getSubDisciplineAssociations() {
        const { data } = await API.getTopicItemNames('Discipline');

        setDisciplineList(data);
    }

    async function getProjectAssociations() {
        const { data: partnerData } = await API.getTopicItemNames('Partner');
        const { data: subDisciplineData } = await API.getTopicItemNames('SubDiscipline');
        
        setPartnerList(partnerData);
        setSubDisciplineList(subDisciplineData);
    }

    async function updateItemDetails(e) {
        e.preventDefault();

        if (e.target.name === 'name') {
            setItemDetails({
                ...itemDetails,
                [e.target.name]: e.target.value,
                path: e.target.value.toLowerCase().replace(/[^a-zA-Z0-9 \-]/g, '').replace(/ +(\/ )*/g, '-')
            });
        } else {
            setItemDetails({
                ...itemDetails,
                [e.target.name]: e.target.value
            });
        }
        
    }

    async function handleEdit() {
        await API.updateItem(topicString, itemDetails);
        window.location.host.split('.')[0] === 'admin' ? window.location.pathname = `/${topic}/${itemDetails.path}` : window.location.pathname = `/admin/${topic}/${itemDetails.path}`;
    }

    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={"hidden md:block"} />
                <main className="flex-1 m-8 text-2xl">
                    <form>
                        <input type="text" id="name" name="name" placeholder={ "Input " + topicString + " name" } value={ itemDetails.name ? itemDetails.name : "" } onChange={ updateItemDetails } className="p-1 mb-4 mx-4 border border-gray-400 rounded-md" />
                        {
                            Object.keys(itemDetails).map((key, i) => {
                                let displayKey;

                                switch (key) {
                                    case 'artistName':
                                    case 'artistCredit':
                                    case 'awards':
                                    case 'client':
                                    case 'company':
                                    case 'link':
                                    case 'location':
                                    case 'role':
                                    case 'timeframe':
                                        return (
                                            <article key={ i } className="flex text-xl my-2 mx-4">
                                                <label htmlFor={ key } className="flex-none p-1 mr-1">{ displayKey = key[0].toUpperCase() + key.slice(1) }:</label>
                                                <input type="text" id={ key } name={ key } value={ itemDetails[key] ? itemDetails[key] : "" } onChange={ updateItemDetails } className="flex-1 p-1 border border-gray-400 rounded-md" />
                                            </article>
                                        );
                                    case 'email':
                                        return (
                                            <article key={ i } className="flex text-xl my-2 mx-4">
                                                <label htmlFor={ key } className="flex-none p-1 mr-1">{ displayKey = key[0].toUpperCase() + key.slice(1) }:</label>
                                                <input type="email" id={ key } name={ key } value={ itemDetails[key] ? itemDetails[key] : "" } onChange={ updateItemDetails } className="flex-1 p-1 border border-gray-400 rounded-md" />
                                            </article>
                                        );
                                    case 'about':
                                    case 'description':
                                    case 'overview':
                                        return (
                                            <article key={ i } className="flex text-xl my-2 mx-4">
                                                <label htmlFor={ key } className="flex-none p-1 mr-1">{ displayKey = key[0].toUpperCase() + key.slice(1) }:</label>
                                                <textarea id={ key } name={ key } value={ itemDetails[key] ? itemDetails[key] : "" } onChange={ updateItemDetails } className="flex-1 p-1 h-36 resize-y border border-gray-400 rounded-md" />
                                            </article>
                                        );
                                    case 'DisciplineId':
                                        return (
                                            <article key={ i } className="flex text-xl my-2 mx-4">
                                                <label htmlFor={ key } className="flex-none p-1 mr-1">{ displayKey = key[0].toUpperCase() + key.slice(1) }:</label>
                                                <select id={ key } name={ key } value={ itemDetails[key] } onChange={ updateItemDetails } className="flex-1 p-1 border border-gray-400 rounded-md">
                                                    {
                                                        disciplineList.map((discipline, i) => {
                                                            return (
                                                                <option value={ discipline.id } key={ i }>{ discipline.id + ' - ' + discipline.name }</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </article>
                                        );
                                    case 'PartnerId':
                                        return (
                                            <article key={ i } className="flex text-xl my-2 mx-4">
                                                <label htmlFor={ key } className="flex-none p-1 mr-1">{ displayKey = key[0].toUpperCase() + key.slice(1) }:</label>
                                                <select id={ key } name={ key } value={ itemDetails[key] } onChange={ updateItemDetails } className="flex-1 p-1 border border-gray-400 rounded-md w-full">
                                                    {
                                                        partnerList.map((partner, i) => {
                                                            return (
                                                                <option value={ partner.id } key={ i }>{ partner.id + ' - ' + partner.name }</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </article>
                                        );
                                    case 'SubDisciplineId':
                                        return (
                                            <article key={ i } className="flex text-xl my-2 mx-4">
                                                <label htmlFor={ key } className="flex-none p-1 mr-1">{ displayKey = key[0].toUpperCase() + key.slice(1) }:</label>
                                                <select id={ key } name={ key } value={ itemDetails[key] } onChange={ updateItemDetails } className="flex-1 p-1 border border-gray-400 rounded-md">
                                                    {
                                                        subDisciplineList.map((subDiscipline, i) => {
                                                            return (
                                                                <option value={ subDiscipline.id } key={ i }>{ subDiscipline.id + ' - ' + subDiscipline.name }</option>
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
                        <button type="button" onClick={ handleEdit } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300">Save Changes</button>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default AdminTopicItem;