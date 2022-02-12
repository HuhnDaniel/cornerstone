import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

import API from '../../utils/API';

function AdminTopicList() {
    const { topic } = useParams();
    const topicString = topic.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('-');

    const [topicItems, setTopicItems] = useState([]);

    useEffect(() => {
        getTopics();
    }, [topicString]);

    async function getTopics() {
        const { data } = await API.getTopicNames(topicString.replace(/[ -]/g, '').slice(0, -1));

        setTopicItems(data);
    }
    
    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={"hidden md:block"} />
                <main className="flex-1 m-8 text-2xl">
                    <h1 className="mb-4 mx-4">{ topicString }</h1>
                    <ul>
                    {
                        topicItems.map((item, i) => {
                            const bgGray = i % 2 == 0 ? 'bg-gray-100 rounded' : '';
                            const namePath = item.name.toLowerCase().replace(/[^a-zA-Z0-9 \-]/g, '').replace(/ +(\/ )*/g, '-');
                            const destination = window.location.host.split('.')[0] === 'admin' ? '/' + topic + '/' + namePath : '/admin/' + topic + '/' + namePath;

                            return (
                            <Link to={ destination } state={{ fullName: item.name }} key={ i }>
                                <li className={`text-xl py-1 px-4 ${bgGray} hover:bg-gray-200 hover:rounded`}>{ item.name }</li>
                            </Link>
                            )
                        })
                    }
                    </ul>
                </main>
            </div>
        </div>
    );
}

export default AdminTopicList;