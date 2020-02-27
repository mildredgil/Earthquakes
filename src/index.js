import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContextProvider } from './AppContext';
import { GoogleMapsContextProvider } from './GoogleMapsContext';

ReactDOM.render(
    <GoogleMapsContextProvider>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </GoogleMapsContextProvider>
, document.getElementById('root'));
