import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import InfosTrafic from '../components/Infos-trafic';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <InfosTrafic />
      <p>My dashboard</p>
      <Footer />
    </div>
  );
}

export default Dashboard;
