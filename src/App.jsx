// src/App.jsx
// rafce / rfce

import { useState } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import './App.css'

function App() {

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex">
      <Sidebar isExpanded={isSidebarExpanded} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarExpanded ? "ml-72" : "ml-20"}`}>
        <Header isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  )
}

export default App
