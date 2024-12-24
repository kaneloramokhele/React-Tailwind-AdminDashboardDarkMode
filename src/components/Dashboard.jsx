// src/components/Dashboard.jsx
// rafce / rfce

import Cards from './Cards';
import Reports from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTraffic from './WebTraffic';
import News from './News';

import '../styles/components/dashboard.css';


function Dashboard() {
    

    return (
        <section id='dashboard' className='dashboard section'>
        <div className="row">
            {/* Left Side */}
            <div className="col-lg-8">
                <div className="row">
                    <Cards />
                    <div className="col-12">
                        <Reports />
                    </div>
                    <div className="col-12">
                        <RecentSales />
                    </div>
                    <div className="col-12">
                        <TopSelling />
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-4">
                <RecentActivity />
                <BudgetReport />
                <WebTraffic />
                <News />
            </div>
        </div>
        </section>
    );
}

export default Dashboard;







