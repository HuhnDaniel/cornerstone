import React, { useEffect } from 'react';

import AdminHeader from '../../components/admin_components/AdminHeader';
import OptionsNav from '../../components/admin_components/OptionsNav';

function AdminHome({ adminPath, currentUser }) {
    return (
        <div>
            <AdminHeader adminPath={ adminPath } />
            <div className="flex flex-col md:flex-row">
                <OptionsNav hidden={""} adminPath={ adminPath } currentUser={ currentUser } />
                <main className="flex-1 m-8 text-2xl">
                    Select a Topic
                </main>
            </div>
        </div>
    );
}

export default AdminHome;