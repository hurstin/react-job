// Jobs Page Component
// Displays all available job listings in a dedicated page
// Uses the JobListings component to fetch and render all jobs

import JobListings from '../components/JobListings';

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      {/* JobListings component without isHome prop to show all jobs */}
      <JobListings />
    </section>
  );
};
export default JobsPage;
