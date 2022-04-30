import React, { useEffect, useState } from 'react';
import AdminLogin from '../pages/admin_pages/AdminLogIn';

import AdminHome from '../pages/admin_pages/AdminHome';
import AdminTopicList from '../pages/admin_pages/AdminTopicList';
import AdminTopicItem from '../pages/admin_pages/AdminTopicItem';

import API from '../utils/API';

function ProtectedRoute({ component, adminPath }) {
    const [currentUser, setCurrentUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        handleCheckAuth();
    }, [isAuthenticated]);

    async function handleCheckAuth() {
        const { user } = await API.checkAuth();
        if (user && user.email) {
            setCurrentUser(user);
            setIsAuthenticated(true);
        }
    }

    if (isAuthenticated) {
        switch (component) {
            case 'topicList':
                return (
                    <AdminTopicList adminPath={ adminPath } currentUser={ currentUser } />
                );
            case 'topicItem':
                return (
                    <AdminTopicItem adminPath={ adminPath } currentUser={ currentUser } />
                );
            default:
                return (
                    <AdminHome adminPath={ adminPath } currentUser={ currentUser } />
                );
        }
    } else {
        return (
            <AdminLogin adminPath={ adminPath } currentUser={ currentUser } />
        );
    }
};

export default ProtectedRoute;