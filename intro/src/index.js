import React from 'react';
import ReactDOM from 'react-dom/client';


function Greeting() // components always start with a capital letter and always return HTML
  { 
    return <h2>My First Component</h2>;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<Greeting />); //always self close