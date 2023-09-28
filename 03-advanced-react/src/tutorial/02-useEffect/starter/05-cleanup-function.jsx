import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false);

  //console.log(toggle);

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
  } , [])

  return (
    <h1>Hello there!</h1>
  )
}

export default CleanupFunction;
