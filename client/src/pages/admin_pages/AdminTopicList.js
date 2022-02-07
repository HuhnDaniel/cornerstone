import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

import API from '../../utils/API';

function AdminTopicList() {
    const location = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    const topicString = location.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ');
    const topic = topicString.map(e => e[0].toUpperCase() + e.slice(1)).join(' ').slice(0, -1);

    const [topicNames, setTopicNames] = useState([]);

    useEffect(() => {
        getTopics();
    }, [topic]);

    async function getTopics() {
        const { data } = await API.getTopicNames(topic.replace(/ /g, ''));

        setTopicNames(data);
    }
    
    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={"hidden md:block"} />
                <main className="flex-1 m-8 text-2xl">
                    <h1 className="mb-4 mx-4">{ topic }</h1>
                    <ul>
                    {
                        topicNames.map((topic, i) => {
                            const bgGray = i % 2 == 0 ? 'bg-gray-100 rounded' : '';
                            let namePath = topic.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/ +(\/ )*/g, '-');

                            return (
                            <Link to={ window.location.host.split('.')[0] === 'admin' ? '/' + location + '/' + namePath : '/admin/' + location + '/' + namePath } key={ i }>
                                <li className={`text-xl py-1 px-4 ${bgGray} hover:bg-gray-200 hover:rounded`}>{ topic.name }</li>
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