// src/App.jsx
// rafce / rfce

import { useState } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Main from './components/dashboard/Main';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import './App.css';

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isExpanded={isSidebarExpanded} />
        
        {/* Main Content Area */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarExpanded ? "ml-72" : "ml-20"}`}>
          {/* Header */}
          <Header isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
          
          {/* Main Section */}
          <Main />

          {/* Footer */}
          <Footer />
        </div>
      </div>

      {/* BackToTop Button */}
      <BackToTop />
    </>
  );
}

export default App;
