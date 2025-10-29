import React from 'react';

const Car = ({ car }) => {
  return (
    <div>
      <p>Year: {car.year}</p>
      <p>Model: {car.model}</p>
      <p>Type: {car.type}</p>
      <p>HP: {car.HP}</p>
      <p>Color: {car.color}</p>
      <p>Tyres: {car.tyres}</p>
    </div>
  );
};

export default Car;