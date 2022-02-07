import React from 'react';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

function AdminHome() {
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