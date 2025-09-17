// Main Layout Component
// Provides the consistent layout structure for all pages in the application
// Includes navigation, page content outlet, and global toast notifications

import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <>
      {/* Navigation bar - appears on all pages */}
      <Navbar />

      {/* Outlet for nested route content - renders the current page */}
      <Outlet />

      {/* Global toast notification container for user feedback */}
      <ToastContainer />
    </>
  );
};
export default MainLayout;
