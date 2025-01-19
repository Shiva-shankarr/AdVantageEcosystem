import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <h2 className="display-4 mb-4">About Us</h2>
            <p className="text-muted mb-4">
              We are a forward-thinking company with a mission to transform the digital landscape. Our platform provides cutting-edge solutions that empower businesses and individuals to thrive in a fast-paced world.
            </p>
            <Button variant="dark" size="lg" className="rounded-pill shadow-lg">
              Learn More
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://media.istockphoto.com/id/1429201424/vector/blog-social-media-platform-influencer-personal-brand-promotion-recent-stories-and-post.jpg?s=612x612&w=0&k=20&c=tROfrRi-btklIadu9ESPOon85w5xjAop_BybZIcO2Lc="
              alt="About Us"
              className="img-fluid rounded-lg shadow-lg"
            />
          </Col>
        </Row>
      </Container>

      {/* Mission, Vision, and Values Section */}
      <div className="about-us-mission py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Guiding Principles</h2>
          <Row className="text-center">
            <Col xs={12} md={4}>
              <h3 className="mb-3">Our Mission</h3>
              <p>
                At AdVantage Ecosystem, we are transforming the future of education by creating a dynamic, decentralized platform that connects communities, learners, and opportunities.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h3 className="mb-3">Our Vision</h3>
              <p>
                A world where learning is inclusive, engaging, and purpose-driven. We envision an ecosystem where communities thrive on peer-to-peer collaboration.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h3 className="mb-3">Our Values</h3>
              <p>
                Integrity, Excellence, Innovation, and Collaboration are the core values that drive us forward.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Meet the Team Section */}
      <div className="meet-the-team py-5">
        <Container>
          <h2 className="text-center mb-4">Meet the Team</h2>
          <Row className="justify-content-center">
  {[
    {
      name: "Nayan Kanaparthi",
      role: "CEO (Co-Founder)",
      img: "https://framerusercontent.com/images/uZfwyXMWpaR7qg1TyG08gmNkc0o.jpg",
      linkedin: "https://www.linkedin.com/in/nayan-kanaparthi-7383a2183/",
    },
    {
      name: "Praveen Kollipara",
      role: "CFO (Co-Founder)",
      img: "https://framerusercontent.com/images/xOzznGjVzrLF4rBS2zIOkQCicY.jpg",
      linkedin: "https://www.linkedin.com/in/praveenkollipara19/",
    },
    {
      name: "Sai Anjana Perepi",
      role: "Product Lead",
      img: "https://framerusercontent.com/images/02U1U7KNYQuoRlYT6uPrpjkucLg.jpg",
      linkedin: "https://www.linkedin.com/in/anjanaperepi007/",
    },
    {
      name: "Richard Abishai",
      role: "Researcher",
      img: "https://framerusercontent.com/images/ubhrWBX1ouwKVMs8iVFcEkqbA.jpg",
      linkedin: "https://www.linkedin.com/in/richard-abishai/",
    },
  ].map((member, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
      <div className="team-member shadow-lg text-center p-3 h-100">
        <img
          src={member.img}
          alt={member.name}
          className="img-fluid rounded-circle mb-3"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
        <h4>{member.name}</h4>
        <h6 className="text-muted mb-3">{member.role}</h6>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </Col>
  ))}
</Row>

        </Container>
      </div>
    </section>
  );
};

export default AboutUs;
