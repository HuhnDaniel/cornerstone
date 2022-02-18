import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

import API from '../../utils/API';

function AdminTopicItem() {
    const { topic, item } = useParams();
    const topicString = topic.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('-').replace(/[ -]/g, '').slice(0, -1);

    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {
        getItemDetails();
    }, [item]);

    async function getItemDetails() {
        const { data } = await API.getItemByPath(topicString, item);
        
        setItemDetails(data[0]);
    }

    async function updateItemDetails(e) {
        e.preventDefault();

        setItemDetails({
            ...itemDetails,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={"hidden md:block"} />
                <main className="flex-1 m-8 text-2xl">
                    <h1 className="mb-4 mx-4">
                        { itemDetails.name ? itemDetails.name : null }
                    </h1>
                    <form>
                    {
                        Object.keys(itemDetails).map((key, i) => {
                            if (key !== "name" && key !== "path" && key !== "id") {
                                let displayKey;
                                return (
                                    <article key={ i } className="text-xl my-2 mx-4">
                                        <label htmlFor={ key } className="p-1 mr-1">{ displayKey = key[0].toUpperCase() + key.slice(1) }:</label>
                                        <input type="text" id={ key } name={ key } value={ itemDetails[key] ? itemDetails[key] : "" } onChange={ updateItemDetails } className="p-1 border border-gray-400 rounded-md"></input>
                                    </article>
                                )
                            }
                        })
                    }
                    </form>
                </main>
            </div>
        </div>
    );
}

export default AdminTopicItem;