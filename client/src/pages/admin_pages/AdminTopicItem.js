import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

import API from '../../utils/API';

function AdminTopicItem() {
    const location = useLocation();
    console.log(location);
    const { topic, item } = useParams();
    const itemString = item.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');

    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={"hidden md:block"} />
                <main className="flex-1 m-8 text-2xl">
                    <h1 className="mb-4 mx-4">
                        { itemString }
                    </h1>
                </main>
            </div>
        </div>
    );
}

export default AdminTopicItem;