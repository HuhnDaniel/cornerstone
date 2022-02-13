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
        
        for (const [key, value] of Object.entries(data[0])) {
            console.log(key, value);
        }
        setItemDetails(data[0]);
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
                </main>
            </div>
        </div>
    );
}

export default AdminTopicItem;