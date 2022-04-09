import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';
import AdminAddType from '../../components/admin_components/AdminAddType';

import API from '../../utils/API';

function AdminAddItem() {
    const { topic } = useParams();
    const topicString = topic.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('-').replace(/[ -]/g, '').slice(0, -1);

    const [itemDetails, setItemDetails] = useState({});
    const [disciplineList, setDisciplineList] = useState([]);
    const [partnerList, setPartnerList] = useState([]);
    const [subDisciplineList, setSubDisciplineList] = useState([]);

    useEffect(() => {
        if (topic === 'sub-disciplines') {
            getSubDisciplineAssociations();
        } else if (topic === 'projects') {
            getProjectAssociations();
        }  
    }, []);

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

    async function handleAdd(e) {
        await API.addTopicItem(topicString, itemDetails);
        document.getElementById('add-item').reset();
        window.location.host.split('.')[0] === 'admin' ? window.location.pathname = `/${topic}/${itemDetails.path}` : window.location.pathname = `/admin/${topic}/${itemDetails.path}`;
    }

    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={"hidden md:block"} />
                <main className="flex-1 m-8 text-2xl">
                    <h1 className="p-1 m-4">New { topicString }</h1>

                    <AdminAddType topic={ topic } updateItemDetails={ updateItemDetails } handleAdd={ handleAdd } disciplineList={ disciplineList } partnerList= { partnerList } subDisciplineList={ subDisciplineList } />
                </main>
            </div>
        </div>
    );
}

export default AdminAddItem;