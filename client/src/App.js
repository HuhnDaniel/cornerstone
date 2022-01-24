import React from 'react';

import Www from './subdomains/Www';
import Admin from './subdomains/Admin';

function App() {
    if (window.location.host.split('.')[0] === 'www' || window.location.host.split('.')[1] === 'herokuapp' || window.location.host === 'localhost:3000') {
        return (
            <Www />
        );
    } else if (window.location.host.split('.')[0] === 'admin') {
        console.log('hi');
        return (
            <Admin />
        );
    }
}

export default App;
