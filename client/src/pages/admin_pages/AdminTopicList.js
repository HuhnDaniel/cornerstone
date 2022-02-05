import React, { useEffect, useState } from "react";

import AdminHeader from "../../components/admin_components/AdminHeader";
import OptionsNav from "../../components/admin_components/OptionsNav";

import API from '../../utils/API';

function AdminTopicList() {
    let topicString = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    topicString = topicString.replace(/[^a-zA-Z0-9 ]/g, ' ').split(" ");
    const topic = topicString.map(e => e[0].toUpperCase() + e.slice(1)).join("").slice(0, -1);

    const [topicNames, setTopicNames] = useState([]);

    useEffect(() => {
        getTopics();
    }, [topic]);

    async function getTopics() {
        const { data } = await API.getTopicNames(topic);
        console.log(data);

        setTopicNames(data);
    }
    
    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav />
                <main className="flex-1 m-8 text-2xl">
                    { topic }
                </main>
            </div>
        </div>
    );
}

export default AdminTopicList;