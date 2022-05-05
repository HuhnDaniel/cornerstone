import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';

import Homepage from '../pages/public_pages/Homepage';
import Partners from '../pages/public_pages/Partners';
import Disciplines from '../pages/public_pages/Disciplines';
import Contact from '../pages/public_pages/Contact';
import Project from '../pages/public_pages/Project';

import AdminLogIn from '../pages/admin_pages/AdminLogIn';

function Public() {
    const [menuStatus, setMenuStatus] = useState(false);
    const adminPath = '/admin/';

    function menuToggle(e) {
        if (menuStatus) {
            setMenuStatus(false);
        } else if (e.target.tagName === 'BUTTON') {
            setMenuStatus(true);
        }
    };

    if ( window.location.host.split('.')[0] !== 'www') {
        return (
            <Router>
                <Routes>
                    <Route exact path="/partners" element={ <Partners menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/disciplines" element={ <Disciplines menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/contact" element={ <Contact menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route path="/project/:projId" element={ <Project menuStatus={menuStatus} menuToggle={menuToggle} />} />

                    <Route path="/admin/:topic" element={ <ProtectedRoute component='topicList' adminPath={ adminPath } /> } />
                    <Route path="/admin/:topic/:item" element={ <ProtectedRoute component='topicItem' adminPath={ adminPath } /> } />
                    <Route path="/admin" element={ <ProtectedRoute component='home' adminPath={ adminPath } /> } />
                    <Route path="/admin/login" element={ <AdminLogIn adminPath={ adminPath } /> } />
                    <Route path="/admin/users/:item/updatePW" element={ <ProtectedRoute component='updatePW' adminPath={ adminPath } />} />
                        
                    <Route path="/*" element={ <Homepage menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                </Routes>
            </Router>
        );
    } else {
        return (
            <Router>
                <Routes>
                    <Route exact path="/partners" element={ <Partners menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/disciplines" element={ <Disciplines menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/contact" element={ <Contact menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route path="/project/:projId" element={ <Project menuStatus={menuStatus} menuToggle={menuToggle} />} />
                        
                    <Route path="/*" element={ <Homepage menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                </Routes>
            </Router>
        );
    }
}

export default Public;