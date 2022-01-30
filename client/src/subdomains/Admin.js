import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminHome from '../pages/admin_pages/AdminHome';
import AdminDisciplines from '../pages/admin_pages/AdminDisciplines';
import AdminSubDisciplines from '../pages/admin_pages/AdminSubDisciplines';
import AdminPartners from '../pages/admin_pages/AdminPartners';
import AdminProjects from '../pages/admin_pages/AdminProjects';

function Admin() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={ <AdminHome /> } />
                    <Route path="/disciplines" element={ <AdminDisciplines /> } />
                    <Route path="/sub-disciplines" element={ <AdminSubDisciplines /> } />
                    <Route path="/partners" element={ <AdminPartners /> } />
                    <Route path="/projects" element={ <AdminProjects /> } />
                </Routes>
        </Router>
    );
}

export default Admin;