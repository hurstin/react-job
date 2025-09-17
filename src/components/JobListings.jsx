// Job Listings Container Component
// Fetches and displays a collection of job postings from the API
// Can show either all jobs or a limited set for the home page

import React, { useEffect, useState } from 'react';
// import jobs from '../job.json'; // Legacy local data import
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  // State management for jobs data and loading status
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from API on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      // Different API endpoints based on whether it's home page or jobs page
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('error checking data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {/* Dynamic section title based on context */}
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>

        {/* Conditional rendering based on loading state */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          /* Grid layout for job listings - responsive columns */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
