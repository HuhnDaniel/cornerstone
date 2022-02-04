import React, { useEffect, useState } from "react";

import AdminHeader from "../../components/admin_components/AdminHeader";
import OptionsNav from "../../components/admin_components/OptionsNav";

import API from '../../utils/API';

function AdminSubDisciplines() {
    const [subDisciplineNames, setSubDisciplineNames] = useState([]);

    useEffect(() => {
        getSubDisciplines();
    }, []);

    async function getSubDisciplines() {
        const { data } = await API.getSubDisciplineNames();
        console.log(data);

        setSubDisciplineNames(data);
    }
    
    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav />
                <main className="flex-1 m-8 text-2xl">
                    Sub-Disciplines
                </main>
            </div>
        </div>
    );
}

export default AdminSubDisciplines;