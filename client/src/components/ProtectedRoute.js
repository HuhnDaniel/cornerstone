import React, { useEffect, useState } from 'react';
import AdminLogin from '../pages/admin_pages/AdminLogIn';
import API from '../utils/API';

function ProtectedRoute({ component }) {
    
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

    return (
        isAuthenticated ? component : <AdminLogin />
    );
};

export default ProtectedRoute;