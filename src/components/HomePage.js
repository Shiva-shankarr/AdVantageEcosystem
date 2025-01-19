"use client";
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './HomePage.css';
import { GlobeDemo } from './GlobeDemo';
import { FaUsers, FaUsersCog, FaRocket } from 'react-icons/fa'; // Importing icons
import { FaEnvelope } from 'react-icons/fa'; // Import the 'Contact Us' icon
import { useNavigate } from 'react-router-dom';



const HomePage = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Products-Tools');
  };

  const handleNavigation00 = () => {
    navigate('/Contact-Us'); // Navigate to the desired route
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero position-relative text-white text-center d-flex justify-content-center align-items-center">
        {/* Background Video */}
        <div className="hero-globe">
          <video autoPlay loop muted className="hero-video">
            <source src="https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="hero-content position-relative">
          <Container>
            <h1 className="display- fw-bold">Welcome to AdVantage Ecosystem</h1>
            <h3 className="display-">Enhancing Education through Community, Curiosity, and Collaboration.</h3>
            <p className="lead">
              Unleash your potential with our Neuroscience-driven methodology.
            </p>
            <p className="lead">
              Revolutionize the way you learn, connect, and evolve. The Adveco Ecosystem provides cutting-edge tools crafted to inspire motivation, encourage collaboration, and transform the educational experience.
            </p>
            <Button variant="light" size="lg" className="rounded-pill" onClick={handleNavigation}>
              Get Started
            </Button>
          </Container>
        </div>
      </section>

       {/* Core Services Section */}
       <section className="core-services py-5">
        <Container>
          <h2 className="text-center mb-4">Core Services</h2>
          <Row className="gy-4">
            {/* Card 1: Community Spaces */}
            <Col xs={12} md={4}>
              <Card className="service-card border-0 shadow-lg rounded text-center">
                <Card.Body>
                  <FaUsers size={50} className="text- mb-3" />
                  <Card.Title>Community Spaces</Card.Title>
                  <Card.Text>
                    Discover vibrant communities that foster peer connections, networking, and shared knowledge. Community Spaces provide a social hub for learners to interact, collaborate, and grow together in meaningful ways.
                  </Card.Text>
                  <Button variant="secondary" className="rounded-pill w-100">
                    Join Community
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2: Microcampus Platform */}
            <Col xs={12} md={4}>
              <Card className="service-card border-0 shadow-lg rounded text-center">
                <Card.Body>
                  <FaUsersCog size={50} className="text mb-3" />
                  <Card.Title>Microcampus Platform</Card.Title>
                  <Card.Text>
                    Immerse yourself in collaborative spaces designed for experiential learning. Set clear goals, tackle challenges, and thrive in feedback-driven environments that keep you motivated and aligned with your learning objectives.
                  </Card.Text>
                  <Button variant="secondary" className="rounded-pill w-100">
                    Start a Collaborative Space
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3: Quest Lab */}
            <Col xs={12} md={4}>
              <Card className="service-card border-0 shadow-lg rounded text-center">
                <Card.Body>
                  <FaRocket size={50} className="text- mb-3" />
                  <Card.Title>Quest Lab</Card.Title>
                  <Card.Text>
                    Engage in gamified, tool-based learning experiences to master real-world skills. Quest Labs leverages neuroscience-backed challenges to make learning interactive, fun, and deeply engaging for sustained motivation.
                  </Card.Text>
                  <Button variant="secondary" className="rounded-pill w-100">
                    Explore Quest Labs
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      {/* About Section */}
<section className="about bg-light py-5">
  <Container>
    <Row className="align-items-center">
      <Col xs={12} md={6}>
        <img
          src="https://img.freepik.com/premium-photo/minimalistic-team-meeting-vector_1198884-72114.jpg?semt=ais_hybrid"
          alt="About Us"
          className="img-fluid rounded"
        />
      </Col>
      <Col xs={12} md={6}>
        <h2>About Us</h2>
        <p>
          AdVantage Ecosystem is a platform dedicated to driving innovation and empowering individuals to achieve more.
        </p>
        <p>
          At AdVantage Ecosystem, we are transforming the future of education by creating a dynamic, decentralized platform that connects communities, learners, and opportunities. Our mission is to foster collaboration and real-world application through three core pillars: 
          <ul>
            <li>Community Spaces for social networking and growth</li>
            <li>Microcampus Platform for decentralized learning and peer collaboration</li>
            <li>Quest Labs for gamified, hands-on learning experiences</li>
          </ul>
          We are dedicated to breaking down traditional education barriers and empowering learners to connect, collaborate, and grow through networks driven by curiosity and innovation, not classrooms.
        </p>
        <Button variant="info" className="rounded-pill">
          Learn More
        </Button>
        <div className="contact-us mt-3">
          <Button variant="outline-dark" className="d-flex align-items-center rounded-pill" onClick={handleNavigation00}>
            <FaEnvelope size={20} className="mr-2" />
            Contact Us
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
</section>


{/* Supported by Section */}
<section className="supported-by bg-white py-5">
  <Container>
    <h2 className="text-center mb-4">Supported by</h2>
    <Row className="gy-4 text-center justify-content-center">
      {[
        "https://framerusercontent.com/images/4QejhIsRhW71mJmCJEKw6a9TY4.svg",
        "https://framerusercontent.com/images/CWqGtDm9EQTDipBqsXBaWlVAMco.svg",
        "https://framerusercontent.com/images/6NyPoRtR9EM4Cr7Niv7dFFCkEH8.png?scale-down-to=512",
        "https://framerusercontent.com/images/O7VfDpSfBLtaH2y3Qv8VYNesXA.png",
        "https://framerusercontent.com/images/OOhQfNR7w3IsxZkLflVmj6XvVAk.png",
        "https://framerusercontent.com/images/I1CwhObHU5NpX8tn88zmdeY31M.png",
      ].map((image, index) => (
        <Col
          xs={6}
          sm={4}
          md={3}
          className={`d-flex justify-content-center ${index >= 4 ? "align-self-center" : ""}`}
          key={index}
        >
          <div className="supported-image-wrapper">
            <img
              src={image}
              alt={`Supported by ${index + 1}`}
              className="img-fluid supported-image"
            />
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>






     {/* Testimonials Section */}
<section className="testimonials py-5 bg-light">
  <Container>
    <h2 className="text-center mb-5">What Our Users Say</h2>
    <Row className="gy-4">
      {["User  1", "User  2", "User  3"].map((user, index) => (
        <Col xs={12} md={4} key={index}>
          <Card className="border-0 shadow-lg rounded-3 testimonial-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p className="text-muted">
                  "This platform has completely transformed the way we work."
                </p>
                <footer className="blockquote-foote text-white">{user}</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

      {/* CTA Section */}
<section className="cta  text-dark text-center py-5">
  <Container>
    <h2 className="display-4 mb-3">Ready to Join Us?</h2>
    <p className="lead mb-4">
      Discover the power of AdVantage Ecosystem today and unlock your potential.
    </p>
    <Button variant="success" size="lg" className="rounded-pill shadow-lg cta-button" onClick={handleNavigation}>
      Get Started
    </Button>
  </Container>
</section>

    </div>
  );
};

export default HomePage;
