import React from 'react';


const ListingCard = () => {
  // Sample listings data
  const listings = [
    { image: 'img/img1.webp', title: 'Beachfront Paradise', type: 'Entire home', guests: 4, bedrooms: 2, bathrooms: 1, price: 200, rating: 4.9 },
    { image: 'img/img2.jpeg', title: 'Mountain Cabin', type: 'Cabin', guests: 6, bedrooms: 3, bathrooms: 2, price: 150, rating: 4.8 },
    { image: 'img/img3.jpeg', title: 'Urban Studio', type: 'Studio', guests: 2, bedrooms: 1, bathrooms: 1, price: 120, rating: 4.6 },
    { image: 'img/img4.jpeg', title: 'Country Cottage', type: 'Entire home', guests: 4, bedrooms: 2, bathrooms: 1, price: 160, rating: 4.7 },
    { image: 'img/img5.jpeg', title: 'City Loft', type: 'Apartment', guests: 2, bedrooms: 1, bathrooms: 1, price: 140, rating: 4.5 },
    { image: 'img/img6.jpeg', title: 'Beach House', type: 'Entire home', guests: 6, bedrooms: 3, bathrooms: 2, price: 250, rating: 4.9 },
    { image: 'img/img7.jpeg', title: 'Rustic Cabin', type: 'Cabin', guests: 5, bedrooms: 2, bathrooms: 1, price: 130, rating: 4.4 },
    { image: 'img/img8.jpeg', title: 'Modern Condo', type: 'Condo', guests: 3, bedrooms: 1, bathrooms: 1, price: 180, rating: 4.8 },
    { image: 'img/img9.jpeg', title: 'Suburban House', type: 'House', guests: 8, bedrooms: 4, bathrooms: 3, price: 300, rating: 4.9 },
    { image: 'img/img10.jpeg', title: 'Cozy Cottage', type: 'Entire home', guests: 4, bedrooms: 2, bathrooms: 1, price: 170, rating: 4.6 },
    { image: 'img/img11.jpeg', title: 'Luxury Villa', type: 'Villa', guests: 10, bedrooms: 5, bathrooms: 4, price: 500, rating: 5.0 },
    { image: 'img/img12.jpeg', title: 'Seaside Bungalow', type: 'Bungalow', guests: 3, bedrooms: 1, bathrooms: 1, price: 90, rating: 4.2 }
  ];

  return (
    <div className="listing-grid">
      {listings.map((listing, index) => (
        <div key={index} className="listing-card">
          <img src={listing.image} alt={listing.title} />
          <h3>{listing.title}</h3>
          <p>{listing.type}</p>
          <p>{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms</p>
          <p>${listing.price} / night</p>
          <p>Rating: {listing.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ListingCard;
