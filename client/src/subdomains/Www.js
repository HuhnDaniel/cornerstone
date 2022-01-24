import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Partners from '../pages/Partners';
import Disciplines from '../pages/Disciplines';
import Contact from '../pages/Contact';
import Project from '../pages/Project';

import AdminHome from '../pages/AdminHome';

function Www() {
    const [menuStatus, setMenuStatus] = useState(false)

    function menuToggle(e) {
        if (menuStatus) {
            setMenuStatus(false);
        } else if (e.target.tagName === 'BUTTON') {
            setMenuStatus(true);
        }
    };

    return (
        <Router>
            <Routes>
                <Route exact path="/partners/" element={ <Partners menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                <Route exact path="/disciplines/" element={ <Disciplines menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                <Route exact path="/contact/" element={ <Contact menuStatus={menuStatus} menuToggle={menuToggle} /> } />
                <Route exact path="/project/:projId" element={ <Project menuStatus={menuStatus} menuToggle={menuToggle} />} />
                {
                    window.location.host.split('.')[1] === 'herokuapp' || window.location.host === 'localhost:3000' ? (<Route exact path="/admin" element={ <AdminHome /> } />) : null
                }
                <Route path="/" element={ <Homepage menuStatus={menuStatus} menuToggle={menuToggle} /> } />
            </Routes>
        </Router>
    );
}

export default Www;