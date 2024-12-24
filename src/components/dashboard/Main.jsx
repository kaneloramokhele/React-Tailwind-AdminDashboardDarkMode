// src/components/Main.jsx
// rafce / rfce


import React from 'react';
import '../styles/components/main.css'
import Pagetitle from './Pagetitle';
import Dashboard from './Dashboard';


function Main() {
  return (
    <main id='main' className='main'>
      <Pagetitle page="Dashboard" />
      <Dashboard />
    </main>
  );
}

export default Main;