import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContest } from './Store/FirebaseContest';
import firebase from './firebase/Config'
import './index.css'
 ReactDOM.render(

  <FirebaseContest.Provider value={{firebase}}>
   <App />
 
   </FirebaseContest.Provider>
    
  
, document.getElementById('root'));
