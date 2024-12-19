import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SearchPage: React.FC = () => {
  const location = useLocation(); // Get the location object
  const [query, setQuery] = useState<string>(''); // State to store the query

  // Parse the query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search); // Parse the query string
    const searchQuery = queryParams.get('query'); // Get the 'query' parameter
    if (searchQuery) {
      setQuery(searchQuery); // Set the query in state
    }
  }, [location]); // Re-run the effect when location changes

  return (  
    <div>
      <h1>Search Results for: {query}</h1>
      {/* You can now use the 'query' to fetch results or display them */}
    </div>
  );
};

export default SearchPage;
