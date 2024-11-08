import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Where are you going?" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
