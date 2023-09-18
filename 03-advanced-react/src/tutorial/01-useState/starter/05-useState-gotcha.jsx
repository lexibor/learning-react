import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  const handleClick = () =>
  {
    setTimeout(() =>
    {
        setCount((currentState) =>
        {
          return currentState + 1;
        });
    }, 3000);
  }

  return (
    <div>
       <h1>{count}</h1>
       <button type="button" className="btn" style={{marginTop: '2rem'}} onClick={handleClick}>add</button>
    </div>
 
  );
};

export default UseStateGotcha;
