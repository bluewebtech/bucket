import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { SRM } from './utilities';

const srm = new SRM();
/*
const srmToEBC = srm.srmToEBC(17);
const srmToLovibond = srm.srmToLovibond(17);
const ebcToSrm = srm.ebcToSrm(17);
const lovibondToSrm = srm.lovibondToSrm(17);
const srmToRgb = srm.srmToRgb(15);
const srmRGBToHex = srm.srmRGBToHex(12.5);
*/
/*
const mcus = [
  {
    weight: 10,
    lovibond: 1.8,
  },
  {
    weight: 1.5,
    lovibond: 2.5,
  },
  {
    weight: 1.25,
    lovibond: 350,
  },
];
*/
const mcus = [
  {
    weight: 4,
    lovibond: 2,
  },
  {
    weight: 1.8,
    lovibond: 7,
  },
  {
    weight: 1.8,
    lovibond: 2.9,
  },
  {
    weight: 1,
    lovibond: 1.3,
  },
];
srm.mcuToSRM(mcus, 3);

// console.log(srmToEBC, srmToLovibond, ebcToSrm, lovibondToSrm, srmToRgb, srmRGBToHex);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
