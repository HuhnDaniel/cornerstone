import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminHome from '../pages/admin_pages/AdminHome';
import AdminHeader from '../components/admin_components/AdminHeader';
import OptionsNav from '../components/admin_components/OptionsNav';

function Admin() {

    return (
        <Router>
            <AdminHeader />
            <div className="flex flex-col md:flex-row">
                <OptionsNav />

                <Routes>
                    <Route path="/" element={<AdminHome />} />
                    {
                        window.location.host.split('.')[1] === 'herokuapp' || window.location.host === 'localhost:3000' ? 
                        (
                            <Route exact path="/admin" element={ <AdminHome /> } />
                        ) : null
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default Admin;