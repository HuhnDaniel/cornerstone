import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';

import AdminLogIn from '../pages/admin_pages/AdminLogIn';

function Admin() {
    const adminPath = '/';

    return (
        <Router>
                <Routes>
                    <Route path="/login" element={ <AdminLogIn adminPath={ adminPath } /> } />
                    <Route path="/updatePW" element={ <ProtectedRoute component='updatePW' adminPath={ adminPath } />} />
                    <Route path="/:topic" element={ <ProtectedRoute component='topicList' adminPath={ adminPath } /> } />
                    <Route path="/:topic/:item" element={ <ProtectedRoute component='topicItem' adminPath={ adminPath } /> } />
                    <Route path="/" element={ <ProtectedRoute component='home' adminPath={ adminPath } /> } />
                </Routes>
        </Router>
    );
}

export default Admin;