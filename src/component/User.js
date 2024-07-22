// src/components/User.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser,setUser } from './redux/UserSlice';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogin = () => {
    const userData = { id: 1, name: 'Saqib amin' }; // Simulate user login data
    dispatch(setUser(userData));
  };

  return (
    <div>
      <h1>User</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={() => dispatch(clearUser())}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default User;
