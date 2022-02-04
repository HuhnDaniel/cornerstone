import React, { useEffect, useState } from "react";

import AdminHeader from "../../components/admin_components/AdminHeader";
import OptionsNav from "../../components/admin_components/OptionsNav";

import API from '../../utils/API';

function AdminPartners() {
    const [partnerNames, setPartnerNames] = useState([]);

    useEffect(() => {
        getPartners();
    }, []);

    async function getPartners() {
        const { data } = await API.getPartnerNames();
        console.log(data);

        setPartnerNames(data);
    }
    
    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav />
                <main className="flex-1 m-8 text-2xl">
                    Partners
                </main>
            </div>
        </div>
    );
}

export default AdminPartners;