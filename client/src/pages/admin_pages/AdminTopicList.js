import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

import API from '../../utils/API';

function AdminTopicList({ adminPath, currentUser }) {
    const { topic } = useParams();
    const topicString = topic.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('-');

    const [topicItems, setTopicItems] = useState([]);

    useEffect(() => {
        getTopicItems();
    }, [topicString]);

    async function getTopicItems() {
        const { data } = await API.getTopicItemNames(topicString.replace(/[ -]/g, '').slice(0, -1));

        setTopicItems(data);
    }

    async function handleDelete(e) {
        await API.deleteItemByPath(topicString.replace(/[ -]/g, '').slice(0, -1), e.target.id);

        window.location.reload();
    }
    
    switch (topic) {
        case 'partners':
            return (
                <div>
                    <AdminHeader adminPath={ adminPath } />
                    <div className="flex flex-col md:flex-row">
                        <OptionsNav hidden={"hidden md:block"} adminPath={ adminPath } currentUser={ currentUser } />
                        {
                            ['users', 'disciplines'].includes(topic) && currentUser.rank !== 'admin' ? (
                                <h1 className="flex-1 m-12 text-2xl">Not authorized to be on this page</h1>
                            ) : (
                                <main className="flex-1 m-8 text-2xl">
                                    <h1 className="mb-4 mx-4">{ topicString }<span className="float-right text-xl">Remove</span></h1>
                                    <ul>
                                    {
                                        topicItems.map((item, i) => {
                                            const bgGray = i % 2 == 0 ? 'bg-gray-100 rounded' : '';
                                            const destination = adminPath + topic + '/' + item.path;

                                            if (currentUser.rank === 'admin' || item.id === currentUser.PartnerId) {
                                                return (
                                                    <li className={`flex text-xl py-1 px-4 ${bgGray} hover:bg-gray-200 hover:rounded`} key={ i }>
                                                        <Link className="flex-1" to={ destination }>{ item.name }</Link>
                                                        <button id={ item.path } className="flex-none text-red-600 mx-4" onClick={ handleDelete }>X</button>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                    </ul>

                                    <Link to={ adminPath + topic + '/add' } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300"> Add {topicString.slice(0, topicString.length - 1)} </Link>
                                </main>
                            )
                        }
                    </div>
                </div>
            );
        case 'projects':
            return (
                <div>
                    <AdminHeader adminPath={ adminPath } />
                    <div className="flex flex-col md:flex-row">
                        <OptionsNav hidden={"hidden md:block"} adminPath={ adminPath } currentUser={ currentUser } />
                        {
                            ['users', 'disciplines'].includes(topic) && currentUser.rank !== 'admin' ? (
                                <h1 className="flex-1 m-12 text-2xl">Not authorized to be on this page</h1>
                            ) : (
                                <main className="flex-1 m-8 text-2xl">
                                    <h1 className="mb-4 mx-4">{ topicString }<span className="float-right text-xl">Remove</span></h1>
                                    <ul>
                                    {
                                        topicItems.map((item, i) => {
                                            const bgGray = i % 2 == 0 ? 'bg-gray-100 rounded' : '';
                                            const destination = adminPath + topic + '/' + item.path;

                                            if (currentUser.rank === 'admin' || item.PartnerId === currentUser.PartnerId) {
                                                return (
                                                    <li className={`flex text-xl py-1 px-4 ${bgGray} hover:bg-gray-200 hover:rounded`} key={ i }>
                                                        <Link className="flex-1" to={ destination }>{ item.name }</Link>
                                                        <button id={ item.path } className="flex-none text-red-600 mx-4" onClick={ handleDelete }>X</button>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                    </ul>

                                    <Link to={ adminPath + topic + '/add' } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300"> Add {topicString.slice(0, topicString.length - 1)} </Link>
                                </main>
                            )
                        }
                    </div>
                </div>
            );
        default:
            return (
                <div>
                    <AdminHeader adminPath={ adminPath } />
                    <div className="flex flex-col md:flex-row">
                        <OptionsNav hidden={"hidden md:block"} adminPath={ adminPath } currentUser={ currentUser } />
                        {
                            ['users', 'disciplines'].includes(topic) && currentUser.rank !== 'admin' ? (
                                <h1 className="flex-1 m-12 text-2xl">Not authorized to be on this page</h1>
                            ) : (
                                <main className="flex-1 m-8 text-2xl">
                                    <h1 className="mb-4 mx-4">{ topicString }<span className="float-right text-xl">Remove</span></h1>
                                    <ul>
                                    {
                                        topicItems.map((item, i) => {
                                            const bgGray = i % 2 == 0 ? 'bg-gray-100 rounded' : '';
                                            const destination = adminPath + topic + '/' + item.path;

                                            return (
                                                <li className={`flex text-xl py-1 px-4 ${bgGray} hover:bg-gray-200 hover:rounded`} key={ i }>
                                                    <Link className="flex-1" to={ destination }>{ item.name }</Link>
                                                    <button id={ item.path } className="flex-none text-red-600 mx-4" onClick={ handleDelete }>X</button>
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>

                                    <Link to={ adminPath + topic + '/add' } className="p-2 text-lg float-right mr-8 mt-4 rounded-lg bg-blue-300"> Add {topicString.slice(0, topicString.length - 1)} </Link>
                                </main>
                            )
                        }
                    </div>
                </div>
            );
    }
}

export default AdminTopicList;