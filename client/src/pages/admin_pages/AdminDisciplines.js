import React from "react";
import AdminHeader from "../../components/admin_components/AdminHeader";

import OptionsNav from "../../components/admin_components/OptionsNav";

function AdminDisciplines() {
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