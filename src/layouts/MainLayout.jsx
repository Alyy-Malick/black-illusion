import React from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBar from '@/components/common/AnnouncementBar';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-white selection:text-black">
      {/* Universal Site-Wide Announcements */}
      <AnnouncementBar mode="static" text="Free domestic shipping on all orders over $150" />
      
      {/* Global Navigation */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
