// src/components/dashboard/Dashboard.jsx
// rafce / rfce

import Cards from '../cards/Cards';
// import Reports from './Reports';
// import RecentSales from './RecentSales';
// import TopSelling from './TopSelling';
// import RecentActivity from './RecentActivity';
// import BudgetReport from './BudgetReport';
// import WebTraffic from './WebTraffic';
// import News from './News';

function Dashboard() {
  return (
    <section id="dashboard" className="dashboard px-4 lg:px-8 py-6">
      <div className="flex flex-wrap gap-6">
        {/* Left Side */}
        <div className="flex-grow lg:w-2/3 space-y-6">
          <Cards />
          {/* <div className="w-full">
            <Reports />
          </div>
          <div className="w-full">
            <RecentSales />
          </div>
          <div className="w-full">
            <TopSelling />
          </div> */}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News /> */}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

