import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Samwise',
    age: 38,
    hobby: 'gardening'
  });

  const updatePerson = () =>
  {
    setPerson(
      {
        name: 'Frodo',
        age: 50,
        hobby: 'disappearing'
      }
    );
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>Enjoys: {person.hobby}</h2>

      <button type='button' style={{marginTop: '2rem'}} className="btn" onClick={updatePerson}>Show Frodo</button>
    </div>
  );
};

export default UseStateObject;
