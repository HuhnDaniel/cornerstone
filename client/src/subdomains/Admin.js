import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AdminHome from '../pages/AdminHome';

function Admin() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminHome />} />
            </Routes>
        </Router>
    );
}

export default Admin;