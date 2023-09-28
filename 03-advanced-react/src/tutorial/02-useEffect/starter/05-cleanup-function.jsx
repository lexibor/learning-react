import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false);

  console.log('render');

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle ? <RandomComponent /> : null}
    </div>
  );
};

const RandomComponent = () =>
{
  useEffect(() => 
  {
    console.log('interesting');

    const intId = setInterval(() =>
    {
      console.log('interval');
    }, 1000);

// CLEANUP FUNCTION SO INTERVAL DOESNT RUN FOREVER
    return () =>
    {
      clearInterval(intId);
      console.log('cleanup');
    }

  } , [])

  return (
    <h1>Hello there!</h1>
  )
}

export default CleanupFunction;
