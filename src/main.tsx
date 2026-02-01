import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Hero from './Hero';
import Projects from './Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
				<Hero />
				<Projects />
    </React.StrictMode>
);
