import React from 'react';
import Navbar from '../components/Navbar';
import InfosTrafic from '../components/Infos-trafic';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <InfosTrafic />
      <p>My dashboard</p>
    </div>
  );
}

export default Dashboard;
