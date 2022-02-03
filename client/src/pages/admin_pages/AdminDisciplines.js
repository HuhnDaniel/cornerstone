import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/admin_components/AdminHeader";

import OptionsNav from "../../components/admin_components/OptionsNav";

import API from '../../utils/API';

function AdminDisciplines() {
    const [disciplineNames, setDisciplineNames] = useState([]);

    useEffect(() => {
        getDisciplines();
    }, []);

    async function getDisciplines() {
        const { data } = await API.getDisciplineNames();
        console.log(data);

        setDisciplineNames(data);
    }

    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav />
                <main className="flex-1 m-8 text-2xl">
                    Disciplines
                </main>
            </div>
        </div>
    );
}

export default AdminDisciplines;