// Categories.js
import React, { useState } from 'react';

const categoryData = [
  { name: "Icons", icon: "⭐", imageUrl: "https://via.placeholder.com/300?text=Icons" },
  { name: "Rooms", icon: "🛏️", imageUrl: "https://via.placeholder.com/300?text=Rooms" },
  { name: "Top cities", icon: "🏙️", imageUrl: "https://via.placeholder.com/300?text=Top+Cities" },
  { name: "Amazing views", icon: "🏞️", imageUrl: "https://via.placeholder.com/300?text=Amazing+Views" },
  { name: "Tiny homes", icon: "🏠", imageUrl: "https://via.placeholder.com/300?text=Tiny+Homes" },
  { name: "Historical homes", icon: "🏰", imageUrl: "https://via.placeholder.com/300?text=Historical+Homes" },
  { name: "Bed & breakfasts", icon: "🥞", imageUrl: "https://via.placeholder.com/300?text=Bed+%26+Breakfasts" },
  { name: "Mansions", icon: "🏛️", imageUrl: "https://via.placeholder.com/300?text=Mansions" },
  { name: "Castles", icon: "🏯", imageUrl: "https://via.placeholder.com/300?text=Castles" },
  { name: "OMG!", icon: "😲", imageUrl: "https://via.placeholder.com/300?text=OMG!" },
  { name: "Trending", icon: "🔥", imageUrl: "https://via.placeholder.com/300?text=Trending" },
  { name: "Arctic", icon: "❄️", imageUrl: "https://via.placeholder.com/300?text=Arctic" },
  { name: "Cabins", icon: "🏕️", imageUrl: "https://via.placeholder.com/300?text=Cabins" },
  { name: "Islands", icon: "🏝️", imageUrl: "https://via.placeholder.com/300?text=Islands" },
  { name: "Luxury", icon: "💎", imageUrl: "https://via.placeholder.com/300?text=Luxury" },
  { name: "Camping", icon: "⛺", imageUrl: "https://via.placeholder.com/300?text=Camping" },
  { name: "Desert", icon: "🏜️", imageUrl: "https://via.placeholder.com/300?text=Desert" },
  { name: "Lakes", icon: "🏞️", imageUrl: "https://via.placeholder.com/300?text=Lakes" },
  { name: "Vineyards", icon: "🍇", imageUrl: "https://via.placeholder.com/300?text=Vineyards" },
  { name: "Countryside", icon: "🌄", imageUrl: "https://via.placeholder.com/300?text=Countryside" },
  { name: "Skiing", icon: "🎿", imageUrl: "https://via.placeholder.com/300?text=Skiing" },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Categories Container */}
      <div className="categories">
        {categoryData.map((category) => (
          <button 
            key={category.name} 
            onClick={() => handleCategoryClick(category)}
            className={`category-item ${activeCategory?.name === category.name ? 'active' : ''}`}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Display Image for Selected Category */}
      {activeCategory && (
        <div className="category-image">
          <h3>{activeCategory.name}</h3>
          <img src={activeCategory.imageUrl} alt={activeCategory.name} />
        </div>
      )}
    </div>
  );
};

export default Categories;
