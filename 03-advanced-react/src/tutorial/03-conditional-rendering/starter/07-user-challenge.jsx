import { useState } from "react";

const UserChallenge = () => 
{
  const [user, setUser] = useState(null);

  // const login = () =>
  // {
  //   setUser({name : 'Anonymous'});
  // }

  // const logout = () =>
  // {
  //   setUser(null);
  // }

  return (
    <div>
      {user ? (
        <div>
           <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please log in</h4>
          <button className="btn" onClick={() => setUser({name : 'Anonymous'})}>Login</button>
        </div>
      )}
    </div>
  )

  return <h2>user challenge</h2>;
};

export default UserChallenge;
