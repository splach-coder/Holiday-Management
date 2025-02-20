import React from 'react';
import '../assets/styles/DKMdashboard.css';
import Header from "../components/Header";
import Greeting from '../components/Greeting';

const Dashboard = () => {
  return (
    <div className="container">

      <Header />

      <div className='Greeting'>
        <Greeting name="Anas Benabbou" />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Holiday Left Card */}
        <div className="holiday-card">
          <div className="holiday-label">HOLIDAY LEFT</div>
          <div className="holiday-count">18</div>
        </div>

        {/* Leave History Section */}
        <div className="history-section">
          <h2 className="history-title">LEAVE HISTORY</h2>
          
          {/* Leave History Items */}
          <div className="history-items">
            {[1, 2].map((item, index) => (
              <div key={index} className="history-item">
                <span className="history-date">
                  HOLIDAY FROM 15/02/2025 TILL 17/02/2025
                </span>
                <span className="history-days">3</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
