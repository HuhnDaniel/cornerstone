import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminHome from '../pages/admin_pages/AdminHome';
import AdminTopicList from '../pages/admin_pages/AdminTopicList';

function Admin() {
    return (
        <Router>
                <Routes>
                    <Route path="/disciplines" element={ <AdminTopicList /> } />
                    <Route path="/sub-disciplines" element={ <AdminTopicList /> } />
                    <Route path="/partners" element={ <AdminTopicList /> } />
                    <Route path="/projects" element={ <AdminTopicList /> } />
                    <Route path="/" element={ <AdminHome /> } />
                </Routes>
        </Router>
    );
}

export default Admin;