import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search } from 'lucide-react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Header.css'; // Import the CSS file
import pic1 from '../assests/Adveco.ico';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div className={`sticky-top bg-dark transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="bg-dark py-3">
        <Container fluid className="px-4">
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Navbar.Brand href="/" className="text-white text-decoration-none d-flex align-items-center" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                <img
                  src={pic1}
                  alt="Company Logo"
                  className="me-2"
                  style={{ width: '30px', height: '30px' }}
                />
                <span className="text-info">AdVantage</span>
                <span className="ms-2">Ecosystem</span>
              </Navbar.Brand>
            </Col>

            <Col xs={12} md={6}>
              <Form onSubmit={handleSearchSubmit} className="d-flex justify-content-md-end">
                <div className="position-relative d-flex" style={{ maxWidth: '400px', width: '100%' }}>
                  <Form.Control
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-dark border-secondary text-white rounded-pill pe-5"
                  />
                  <Button variant="link" type="submit" className="position-absolute end-0 top-50 translate-middle-y text-secondary" style={{ paddingRight: '1rem' }}>
                    <Search size={20} />
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar expand="lg" className="bg-dark py-0" variant="dark">
        <Container fluid className="px-4">
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0 px-0 ms-n2" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              {['/',  '/Products-Tools', '/WhyAdveco', '/Community-Space', '/Resources','/About-Us', '/Careers', '/Contact-Us'].map((path, index) => (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={path}
                  className="nav-link-custom"
                  activeClassName="active" // This adds an active class when the link is active
                >
                  {path.replace('/', '') || 'Home'}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
