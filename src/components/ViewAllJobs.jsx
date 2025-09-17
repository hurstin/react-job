// View All Jobs Component
// Simple call-to-action button that navigates to the full jobs listing page
// Used on the home page to encourage users to explore more job opportunities

import { Link } from 'react-router-dom';

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      {/* Call-to-action button linking to jobs page */}
      <Link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Jobs
      </Link>
    </section>
  );
};
export default ViewAllJobs;
