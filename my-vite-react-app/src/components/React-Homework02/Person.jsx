import React from 'react';

const Person = ({ person }) => {
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Surname: {person.surname}</p>
      <p>Age: {person.age}</p>
      <p>Height: {person.height}</p>
      <p>Weight: {person.weight}</p>
      <p>Profession: {person.profession}</p>
    </div>
  )
}

export default Person;