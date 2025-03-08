import React, { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/api/auth/google';  // Ensure this is correct
  };
  

  useEffect(() => {
    // Fetch logged-in user data
    fetch("http://localhost:3000/api/auth/user", {
      credentials: "include", // Ensure cookies are sent
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  const handleLogout = () => {
    window.location.href = "http://localhost:3000/api/auth/logout";
  };

  return (
    <div>
      <h1>Login</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Login;
