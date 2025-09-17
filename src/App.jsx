// React Job Board Application - Main App Component
// This file sets up the routing structure and CRUD operations for the job board

import React from 'react';

// React Router DOM imports for client-side routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Page component imports
import HomePage from './pages/HomePage';
import MainLayout from './assets/layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  /**
   * CRUD Operations for Job Management
   * These functions handle API calls to the JSON server for job data manipulation
   */

  // Create a new job posting
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete an existing job posting by ID
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update an existing job posting
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  /**
   * Application Routing Configuration
   * Sets up all routes for the job board application with nested routing
   */
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* Home page - displays featured jobs and hero section */}
        <Route index element={<HomePage />} />

        {/* Jobs listing page - shows all available jobs */}
        <Route path="/jobs" element={<JobsPage />} />

        {/* Add new job form - allows users to create new job postings */}
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        {/* Individual job details page - displays specific job information */}
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        {/* Edit job form - allows users to modify existing job postings */}
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        {/* 404 page - catches any unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

/**
 * Legacy JSX Code (Commented Out)
 * This was the original structure before implementing React Router
 * Components are now organized within the routing structure
 */
{
  /* <>
<Navbar />
<Hero
  tile="Become a React Dev"
  subtitle="Find the React job that fits your skills and needs"
/>
<HomeCards />
<JobListings />
<ViewAllJobs />
</> */
}
