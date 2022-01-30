import React from "react";

import AdminHeader from "../../components/admin_components/AdminHeader";
import OptionsNav from "../../components/admin_components/OptionsNav";

function AdminPartners() {
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