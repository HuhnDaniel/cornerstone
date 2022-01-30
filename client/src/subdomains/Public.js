import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from '../pages/public_pages/Homepage';
import Partners from '../pages/public_pages/Partners';
import Disciplines from '../pages/public_pages/Disciplines';
import Contact from '../pages/public_pages/Contact';
import Project from '../pages/public_pages/Project';

import AdminHome from '../pages/admin_pages/AdminHome';
import AdminDisciplines from '../pages/admin_pages/AdminDisciplines';
import AdminSubDisciplines from '../pages/admin_pages/AdminSubDisciplines';
import AdminPartners from '../pages/admin_pages/AdminPartners';
import AdminProjects from '../pages/admin_pages/AdminProjects';

function Public() {
    const [menuStatus, setMenuStatus] = useState(false)

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
                    <Route exact path="/partners/" element={ <Partners menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/disciplines/" element={ <Disciplines menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/contact/" element={ <Contact menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/project/:projId" element={ <Project menuStatus={menuStatus} menuToggle={menuToggle} />} />

                    <Route exact path="/admin" element={ <AdminHome /> } />
                    <Route exact path="/admin/disciplines" element={ <AdminDisciplines /> } />
                    <Route exact path="/admin/sub-disciplines" element={ <AdminSubDisciplines /> } />
                    <Route exact path="/admin/partners" element={ <AdminPartners /> } />
                    <Route exact path="/admin/projects" element={ <AdminProjects /> } />
                        
                    <Route path="/*" element={ <Homepage menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                </Routes>
            </Router>
        );
    } else {
        return (
            <Router>
                <Routes>
                    <Route exact path="/partners/" element={ <Partners menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/disciplines/" element={ <Disciplines menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/contact/" element={ <Contact menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                    <Route exact path="/project/:projId" element={ <Project menuStatus={menuStatus} menuToggle={menuToggle} />} />
                        
                    <Route path="/*" element={ <Homepage menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                </Routes>
            </Router>
        );
    }
}

export default Public;