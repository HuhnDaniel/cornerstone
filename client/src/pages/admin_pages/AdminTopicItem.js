import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import _ from 'underscore';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';
import AdminEditType from '../../components/admin_components/AdminEditType';
import AdminAddType from '../../components/admin_components/AdminAddType';

import API from '../../utils/API';

function AdminTopicItem({ adminPath }) {
    const { topic, item } = useParams();
    const topicString = topic.replace(/[^a-zA-Z0-9 ]/g, ' ').split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join('-').replace(/[ -]/g, '').slice(0, -1);

    const [itemDetails, setItemDetails] = useState({});
    const [initialItemDetails, setInitialItemDetails] = useState({});

    const [disciplineList, setDisciplineList] = useState([]);
    const [partnerList, setPartnerList] = useState([]);
    const [subDisciplineList, setSubDisciplineList] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [emailFormatMsg, setEmailFormatMsg] = useState('hidden');

    useEffect(() => {
        if (item !== 'add') {
            getItemDetails();
        }

        if (topic === 'sub-disciplines') {
            getSubDisciplineAssociations();
        } else if (topic === 'projects') {
            getProjectAssociations();
        }
    }, [item]);

    useEffect(() => {
        if (!_.isEqual(initialItemDetails, itemDetails) && buttonDisabled && (!_.isEqual(initialItemDetails, {}) || item === 'add')) {
            setButtonDisabled(false);
        } else if ((_.isEqual(initialItemDetails, itemDetails) || !itemDetails.name) && !buttonDisabled) {
            setButtonDisabled(true);
        }
    }, [itemDetails]);

    async function getItemDetails() {
        const { data } = await API.getItemByPath(topicString, item);
        
        setItemDetails(data[0]);
        setInitialItemDetails(data[0]);
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

    function updateItemDetails(e) {
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
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(itemDetails.email)) {
            await API.updateTopicItem(topicString, itemDetails);
            document.getElementById('edit-item').reset();
            setEmailFormatMsg('hidden');

            window.location.pathname = `${adminPath}${topic}/${itemDetails.path}`;
        } else {
            setEmailFormatMsg('');
        }
    }

    async function handleAdd() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(itemDetails.email)) {
            await API.addTopicItem(topicString, itemDetails);
            document.getElementById('add-item').reset();
            setEmailFormatMsg('hidden');

            window.location.pathname = `${adminPath}${topic}/${itemDetails.path}`;
        } else {
            setEmailFormatMsg('');
        }
    }

    if (item === "add") {
        return (
            <div>
                <AdminHeader adminPath={ adminPath } />
                <div className="flex flex-col md:flex-row">
                    <OptionsNav hidden={"hidden md:block"} adminPath={ adminPath } />
                    <AdminAddType topic={ topic } topicString={ topicString } updateItemDetails={ updateItemDetails } handleAdd={ handleAdd } disciplineList={ disciplineList } partnerList= { partnerList } subDisciplineList={ subDisciplineList } buttonDisabled={ buttonDisabled } emailFormatMsg={ emailFormatMsg } />
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <AdminHeader adminPath={ adminPath } />
                <div className="flex flex-col md:flex-row">
                    <OptionsNav hidden={"hidden md:block"} adminPath={ adminPath } />
                    <AdminEditType topicString={ topicString } itemDetails={ itemDetails } updateItemDetails={ updateItemDetails } disciplineList={ disciplineList } partnerList={ partnerList } subDisciplineList={ subDisciplineList } handleEdit={ handleEdit } buttonDisabled={ buttonDisabled } emailFormatMsg={ emailFormatMsg } />
                </div>
            </div>
        );
    }
}

export default AdminTopicItem;