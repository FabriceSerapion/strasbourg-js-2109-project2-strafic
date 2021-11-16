import React from 'react';
import Itineraire from '../components/Itineraire';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import InfosTrafic from '../components/Infos-trafic';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <InfosTrafic />
      <Itineraire />
      <Footer />
    </div>
  );
}

export default Dashboard;
