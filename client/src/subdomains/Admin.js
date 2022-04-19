import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';

import AdminHome from '../pages/admin_pages/AdminHome';
import AdminTopicList from '../pages/admin_pages/AdminTopicList';
import AdminTopicItem from '../pages/admin_pages/AdminTopicItem';
import AdminLogIn from '../pages/admin_pages/AdminLogIn';

function Admin() {
    return (
        <Router>
                <Routes>
                    <Route path="/login" element={ <AdminLogIn /> } />
                    <Route path="/:topic" element={ <ProtectedRoute component={ <AdminTopicList /> } /> } />
                    <Route path="/:topic/:item" element={ <ProtectedRoute component={ <AdminTopicItem /> } /> } />
                    <Route path="" element={ <ProtectedRoute component={ <AdminHome /> } /> } />
                </Routes>
        </Router>
    );
}

export default Admin;