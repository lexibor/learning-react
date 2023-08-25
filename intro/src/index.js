import React from 'react';
import ReactDOM from 'react-dom/client';


function Greeting() // components always start with a capital letter and always return HTML
{ 
    return (
      <div>
        <Person />
        <Message />
      </div>
    )
}

const Person = () => <h2>Hi</h2>;
const Message = () => 
{
  return <p>this is my message</p>;
};

/*

  NORMAL CONVENTION IS TO HAVE AN "APP" COMPONENT IN WHICH
  THE REST OF THE COMPONENTS ARE GOING TO GO INTO TO BUILD
  A PAGE EX: "NAVBAR" COMPONENT, "FOOTER" COMPONENT ETC.

  IT IS NORMAL FOR THOSE COMPONENTS TO ALSO HAVE
  OTHER COMPONENTS NESTED INSIDE OF THEM

  COMPONENTS ARE LIKE FUNCTIONS IN WHICH THEY ARE MADE IF
  THE "INFORMATION" INSIDE OF THEM IS GOING TO BE 
  REPEATED ELSEWHERE.

*/


// function Greeting() 
// { 
//     return React.createElement('h2', {}, "hello world");
// }

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<Greeting />); //always self close