// src/components/dashobard/Main.jsx
// rafce / rfce

import Pagetitle from './Pagetitle';
import Dashboard from './Dashboard';

function Main() {
  return (
    <main id="main" className="mt-16 lg:px-8 px-5 transition-all">
      <Pagetitle page="Dashboard" />
      <Dashboard />
    </main>
  );
}

export default Main;

