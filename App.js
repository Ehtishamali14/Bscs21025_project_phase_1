// App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [listings, setListings] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);

  useEffect(() => {
    // Fetch mock listing data on component mount
    setListings([
      {
        image: 'property1.jpg',
        title: 'Cozy Beachfront House',
        type: 'Entire home',
        category: 'Beachfront',
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 150,
        rating: 4.8,
      },
      // Additional listings with categories like 'Cabins', 'Trending', etc.
    ]);
  }, []);

  // Filter listings based on selected category
  const displayedListings = filteredCategory
    ? listings.filter(listing => listing.category === filteredCategory)
    : listings;

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Categories setFilteredCategory={setFilteredCategory} />
      <div className="listings">
        {displayedListings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
