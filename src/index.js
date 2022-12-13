//import react
import React from 'react';

//import react dom
import ReactDOM from 'react-dom';

//import component App
import App from './App';

//import BrowseRouter dari react router
import { BrowserRouter } from 'react-router-dom';

//import CSS bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import mapbox gl css
import 'mapbox-gl/dist/mapbox-gl.css';

//import mapbox gl direction css
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

//import mapbox geocoder css
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

//import css
import './assets/css/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);