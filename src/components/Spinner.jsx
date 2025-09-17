// Loading Spinner Component
// Displays a loading indicator using react-spinners library
// Used throughout the application when data is being fetched

import { ClipLoader } from 'react-spinners';

// Custom styling override for the spinner
const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca" // Indigo color to match app theme
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
