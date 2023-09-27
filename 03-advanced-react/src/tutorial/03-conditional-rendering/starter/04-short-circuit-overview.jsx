import { useState } from 'react';

const ShortCircuitOverview = () => 
{

  const [text, setText] = useState('');
  const [name, setName] = useState('Susan');

const codeExample = text || 'hello world'


  return (
    <div>
      <h4>Falsy OR : {text || 'Hello World'}</h4>
      <h4>Falsy AND : {text && 'Hello World'}</h4>
      <h4>Truthy OR : {name || 'Hello World'}</h4>
      <h4>Truthy AND : {name && 'Hello World'}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
