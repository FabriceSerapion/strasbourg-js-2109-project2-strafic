import React from 'react';
import Itineraire from '../components/Itineraire';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Itineraire />
      <Footer />
    </div>
  );
}

export default Dashboard;
