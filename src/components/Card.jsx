// Reusable Card Component
// A flexible container component that provides consistent styling for content cards
// Accepts children content and optional background color customization

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
