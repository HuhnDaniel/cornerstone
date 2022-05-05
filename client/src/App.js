import React from 'react';

import Public from './subdomains/Public';
import Admin from './subdomains/Admin';

function App() {
    if (window.location.host.split('.')[0] === 'www' || window.location.host.split('.')[1] === 'herokuapp' || window.location.host === 'localhost:3000') {
        return (
            <Public />
        );
    } else if (window.location.host.split('.')[0] === 'admin') {
        return (
            <Admin />
        );
    }
}

export default App;
