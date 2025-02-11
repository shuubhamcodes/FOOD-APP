import React from 'react';
import { CDN_URL } from '../utils/constants';
const RestaurantCard = (props) => {
  const{resData}= props

  const {name, avgRating,cuisines, costForTwo, deliveryTime,} = resData?.data;
  return (
    <div className="res-card">
     <img
        className='res-logo'
        src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_450,q_auto,w_710/f_auto/food-trends-2021-phprMLwAP"
        alt="Restaurant"
      />


      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo/100}</h4>
      <p>⭐ {avgRating} • {deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantCard;
