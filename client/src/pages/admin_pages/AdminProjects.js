import React, { useEffect, useState } from "react";

import AdminHeader from "../../components/admin_components/AdminHeader";
import OptionsNav from "../../components/admin_components/OptionsNav";

import API from '../../utils/API';

function AdminProjects() {
    const [projectNames, setProjectNames] = useState([]);

    useEffect(() => {
        getProjects();
    }, []);

    async function getProjects() {
        const { data } = await API.getProjectNames();
        console.log(data);

        setProjectNames(data);
    }
    
    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav />
                <main className="flex-1 m-8 text-2xl">
                    Projects
                </main>
            </div>
        </div>
    );
}

export default AdminProjects;