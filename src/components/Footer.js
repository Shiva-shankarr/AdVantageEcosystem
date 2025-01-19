import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import custom CSS file

function Footer() {
  const [email, setEmail] = useState('');

  // Handle subscription form
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/products-tools', label: 'Product & Tools' },
    { href: '/whyadveco', label: 'Why AdVantage' },
    { href: '/community-space', label: 'Community Space' },
    { href: '/resources', label: 'Resources' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact-us', label: 'Contact Us' }
  ];

  return (
    <footer className="bg-dark text-white py-2">
      <Container>
        <Row className="gy-4">
          {/* Section 1: AdVantage Heading and Subscribe Form */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h5 className="text-info">AdVantage Ecosystem</h5>
            <Form onSubmit={handleSubscribe}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-pill"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100 rounded-pill">
                Subscribe
              </Button>
            </Form>
          </Col>

          {/* Section 2: Social Links */}
          <Col xs={12} md={4} className="text-center">
            <h5 className="text-info">Follow Us</h5>
            <div className="social-icons d-flex justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <FaInstagram />
              </a>
            </div>
          </Col>

         {/* Section 4: Nav Links */}
<Col xs={12} md={3}>
  <h5 className="text-info">Quick Links</h5>
  <div className="row">
    <div className="col-6">
      {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
        <Nav.Link key={link.href} href={link.href} className="text-white">
          {link.label}
        </Nav.Link>
      ))}
    </div>
    <div className="col-6">
      {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
        <Nav.Link key={link.href} href={link.href} className="text-white">
          {link.label}
        </Nav.Link>
      ))}
    </div>
  </div>
</Col>

        </Row>
        <div className="text-center mt-4">
          <p className="mb-0">© 2025 AdVantage Ecosystem. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
