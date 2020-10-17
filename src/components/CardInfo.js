import React from 'react';
import '../App.css';
import WikiButton from './WikiButton.js';

function CardInfo(props) {
  return(
    <div className="card-container">
      <div className="card-title">{props.name}</div>
      <p className="card-text description">{props.description}</p>
      <p className="card-text lat-lon">lattitude and longitude: {props.lat}, {props.lon}</p>
      <WikiButton />
    </div>
  );
}

export default CardInfo;