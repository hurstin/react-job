// Home Page Component
// The main landing page that showcases the job board application
// Combines hero section, action cards, featured jobs, and call-to-action

import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      {/* Hero banner with main value proposition */}
      <Hero
        tile="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />

      {/* Action cards for developers and employers */}
      <HomeCards />

      {/* Featured job listings (limited to 3 for home page) */}
      <JobListings isHome={true} />

      {/* Call-to-action button to view all jobs */}
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
