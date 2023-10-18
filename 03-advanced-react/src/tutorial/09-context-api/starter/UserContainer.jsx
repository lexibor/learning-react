const UserContainer = ({user, logout}) => {
  return (
    <div className="user-container">
        {user?
        ( 
            <>
                <p>Hello there, {user?.name?.toUpperCase()}</p>  {/*optional chaining */}
                <button className="btn" onClick={logout}>logout</button>
            </>
        ):
        (
            <p>Please Login</p>
        )}
    </div>
  )
}
export default UserContainer