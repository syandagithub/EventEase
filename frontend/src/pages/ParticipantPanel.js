import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ParticipantSidebar from '../components/ParticipantSidebar';
import ParticipantHeader from '../components/ParticipantHeader';
import ParticipantDashboard from '../pages/ParticipantDashboard';
import ParticipantEvents from '../pages/ParticipantEvents';
import Notifications from '../pages/Notifications';
import Settings from '../pages/Settings';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-panel">
      <ParticipantHeader />
      <ParticipantSidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <div className="admin-content">
        <Routes>
          <Route path="/"/>
          <Route path="/dashboard" element={<ParticipantDashboard />} />
          <Route path="/events" element={<ParticipantEvents />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
