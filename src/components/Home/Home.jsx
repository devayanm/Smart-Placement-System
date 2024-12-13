import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card, Carousel, Jumbotron } from "react-bootstrap";
import { FaSearch, FaRegHandshake, FaRegUser, FaBriefcase, FaGraduationCap } from "react-icons/fa"; // Additional icons for variety

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        style={{
          height: "100vh",
          backgroundImage: "url('https://source.unsplash.com/1920x1080/?tech,team')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold text-shadow">Revolutionizing Campus Placements</h1>
          <p className="lead text-shadow">
            Discover opportunities tailored to your skills. Simplify your career journey.
          </p>
          <div className="mt-4">
            <Button
              variant="light"
              size="lg"
              as={Link}
              to="/login"
              className="me-3"
              style={{ fontWeight: "600", borderRadius: "50px" }}
            >
              Get Started
            </Button>
            <Button
              variant="light"
              size="lg"
              as={Link}
              to="/register"
              style={{ fontWeight: "600", borderRadius: "50px" }}
            >
              Learn More
            </Button>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Features You’ll Love</h2>
            <p>Empowering students, TPOs, and companies with advanced tools.</p>
          </Col>
        </Row>
        <Row className="g-4">
          {[
            { title: "Intelligent Matching", icon: <FaSearch size={40} color="#007bff" />, text: "Get jobs suited to your skills and goals." },
            { title: "Profile Management", icon: <FaRegUser size={40} color="#007bff" />, text: "Maintain an up-to-date professional profile." },
            { title: "Recruiter Tools", icon: <FaBriefcase size={40} color="#007bff" />, text: "Enable recruiters to filter candidates efficiently." },
            { title: "Skill Development", icon: <FaGraduationCap size={40} color="#007bff" />, text: "Access resources to enhance your skills." },
            { title: "Job Notifications", icon: <FaRegHandshake size={40} color="#007bff" />, text: "Stay updated on the latest job opportunities." },
          ].map((feature, idx) => (
            <Col md={4} key={idx} className="d-flex justify-content-center">
              <Card
                style={{
                  width: "18rem",
                  borderRadius: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <Card.Body className="text-center">
                  <div className="mb-3">{feature.icon}</div>
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* How It Works Section */}
      <Container fluid className="bg-light py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">How It Works</h2>
              <p>Streamline your job search in just a few simple steps.</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {[
              { icon: <FaRegUser size={40} color="#007bff" />, title: "1. Create a Profile", description: "Start by adding your skills, experience, and career goals." },
              { icon: <FaSearch size={40} color="#007bff" />, title: "2. Find Jobs", description: "Search and apply for job openings that suit your preferences." },
              { icon: <FaBriefcase size={40} color="#007bff" />, title: "3. Get Hired", description: "Track your applications and secure your dream role." },
            ].map((step, idx) => (
              <Col md={3} key={idx} className="text-center mb-4">
                {step.icon}
                <h5 className="fw-bold mt-3">{step.title}</h5>
                <p>{step.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Testimonials Section */}
      <Container className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">What Users Say</h2>
          </Col>
        </Row>
        <Carousel indicators={false}>
          {[
            { text: "This platform changed my career trajectory!", name: "Amit Kumar" },
            { text: "Effortless placement process for students.", name: "Priya Sharma" },
            { text: "Smart tools for TPOs and recruiters alike.", name: "Ravi Verma" },
          ].map((testimonial, idx) => (
            <Carousel.Item key={idx}>
              <Card
                className="border-0 mx-auto"
                style={{ width: "50%", background: "#f8f9fa", borderRadius: "15px", padding: "1.5rem" }}
              >
                <Card.Text className="fst-italic">{`"${testimonial.text}"`}</Card.Text>
                <Card.Footer className="text-end text-muted">- {testimonial.name}</Card.Footer>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Call to Action Section */}
      <div className="text-center py-5" style={{ backgroundColor: "#007bff", color: "white" }}>
        <h2 className="fw-bold">Ready to take your career to the next level?</h2>
        <p>Join our platform today and start discovering new opportunities.</p>
        <Button
          variant="light"
          size="lg"
          as={Link}
          to="/register"
          style={{ fontWeight: "600", borderRadius: "50px" }}
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Home;
