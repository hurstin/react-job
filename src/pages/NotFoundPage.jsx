// 404 Not Found Page Component
// Displays when users navigate to a non-existent route
// Provides a user-friendly error message and navigation back to home

import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        {/* Warning icon to indicate error */}
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />

        {/* 404 error heading */}
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>

        {/* Error message */}
        <p className="text-xl mb-5">This page does not exist</p>

        {/* Navigation button back to home page */}
        <Link
          to="/"
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          Go Back
        </Link>
      </section>
    </>
  );
};
export default NotFoundPage;
