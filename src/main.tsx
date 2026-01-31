import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Hero from './Hero';
import Resources from './Resources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
				<Hero />
				<Resources />
    </React.StrictMode>
);
