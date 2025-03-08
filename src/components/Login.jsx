import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    console.log("Redirecting to Google login...");
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;  // Ensure this is correct
  };

  useEffect(() => {
    console.log("Fetching logged-in user data...");
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/user`, {
      credentials: "include", // Ensure cookies are sent
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          console.log("User data fetched successfully:", data.user);
          setUser(data.user);
        } else {
          console.log("No user is logged in.");
        }
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Logged out successfully.");
          setUser(null);
        } else {
          console.error("Logout failed.");
        }
      })
      .catch((err) => console.error("Error during logout:", err));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">Bookmark App</Card.Title>
              {user ? (
                <div className="text-center">
                  <h2>Welcome, {user.username}</h2>
                  <p>Email: {user.email}</p>
                  <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </div>
              ) : (
                <div className="text-center">
                  <Button variant="primary" onClick={handleGoogleLogin}>Sign in with Google</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;