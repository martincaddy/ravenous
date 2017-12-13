import React from 'react';
import ReactDOM from 'react-dom';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

class Business extends React.Component {
  render() {
    <div className="Business">
  <div className="image-container">
    <img src={business.thisimageSrc} alt=''/>
  </div>
  <h2>{business.thisname}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.thisaddress}</p>
      <p>{business.thiscity}</p>
      <p>{business.thiszipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{business.thiscategory}</h3>
      <h3 className="rating">{business.thisrating}</h3>
      <p>{business.thisreviewCount}</p>
    </div>
  </div>
</div>
  }
};
