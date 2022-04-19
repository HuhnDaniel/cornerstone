import React, { useEffect } from 'react';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';
// import API from '../../utils/API';

function AdminHome() {
    // useEffect(() => {
    //     authCheck();
    // }, []);

    // async function authCheck() {
    //     const data = await API.checkAuth();
    // }

    return (
        <div>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={""} />
                <main className="flex-1 m-8 text-2xl">
                    Select a Topic
                </main>
            </div>
        </div>
    );
}

export default AdminHome;