import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Map from './pages/Map';
import Shelters from './pages/Shelters';
import Logistics from './pages/Logistics';
import Reports from './pages/Reports';
import Archive from './pages/Archive';
import Profile from './pages/Profile';
import Impact from './pages/Impact';
import Audit from './pages/Audit';
import Volunteer from './pages/Volunteer';
import VolunteerRegistration from './pages/VolunteerRegistration';
import VolunteerTraining from './pages/VolunteerTraining';
import Directory from './pages/Directory';
import Maintenance from './pages/Maintenance';
import FieldService from './pages/FieldService';
import Edge from './pages/Edge';
import EdgeTraining from './pages/EdgeTraining';
import EdgeFirmware from './pages/EdgeFirmware';
import EdgeSimulation from './pages/EdgeSimulation';
import DialectLab from './pages/DialectLab';
import Infrastructure from './pages/Infrastructure';
import Public from './pages/Public';
import PublicPortal from './pages/PublicPortal';
import Settings from './pages/Settings';
import Support from './pages/Support';
import NationalInventory from './pages/NationalInventory';
import ProjectDetails from './pages/ProjectDetails';

export default function App() {
  return (
    <Routes>
      {/* Standalone Public Portal Route */}
      <Route path="/public-portal" element={<PublicPortal />} />
      
      {/* Main App Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/map" element={<Map />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/logistics/inventory" element={<NationalInventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/archive" element={<Archive />} />
        
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/volunteer/registration" element={<VolunteerRegistration />} />
        <Route path="/volunteer/training" element={<VolunteerTraining />} />
        <Route path="/edge" element={<Edge />} />
        <Route path="/edge/training" element={<EdgeTraining />} />
        <Route path="/edge/firmware" element={<EdgeFirmware />} />
        <Route path="/edge/simulation" element={<EdgeSimulation />} />
        <Route path="/edge/dialect-lab" element={<DialectLab />} />
        <Route path="/public" element={<Public />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/maintenance/tickets" element={<FieldService />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
