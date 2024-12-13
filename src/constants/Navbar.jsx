import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, Button } from "react-bootstrap";

const AppNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = true; // Replace with actual authentication state

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logged out");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Smart Placement System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/jobs">
              Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="/job-recommendations">
              Recommendations
            </Nav.Link>
            <NavDropdown title="Profiles" id="profiles-dropdown">
              <NavDropdown.Item as={Link} to="/profiles/student">
                Student Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profiles/company">
                Company Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profiles/tpo">
                TPO Profile
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/applications">
              Applications
            </Nav.Link>
            <Nav.Link as={Link} to="/eligibility">
              Eligibility
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              Search
            </Button>
          </Form>
          <Nav className="ms-3">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/admin">
                  Admin Panel
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
