import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGraduationCap, FaUsers, FaBrain } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import "./WhyAdveco.css"; // Ensure you have a CSS file for styles

const WhyAdveco = () => {
  return (
    <section className="why-adveco py-5" id="why-adveco">
      <Container>
        {/* Title and Introduction */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title mb-3">Why Adveco?</h2>
            <p className="section-intro">
              Bridging the Gaps in Learning and Collaboration
            </p>
          </Col>
        </Row>

        {/* Section: Challenges in Education */}
        <Row className="mb-5 align-items-center">
          <Col lg={6} className="text-center">
            <h3 className="section-subtitle mb-4">The Crisis in Education</h3>
            <p className="section-text">
              Education is undergoing a crisis of relevance and accessibility.
              Traditional systems often neglect the collaborative, real-world
              problem-solving skills required in today's dynamic workplaces. This
              creates barriers to innovation, leaves learners unmotivated, and
              deprives them of the skills they need to thrive in a fast-evolving world.
            </p>
            <ul className="section-list">
              <li>A lack of meaningful engagement and purpose in learning journeys.</li>
              <li>Limited access to peer-to-peer networks for collaboration.</li>
              <li>A disconnect between theoretical knowledge and practical application.</li>
            </ul>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <img src="https://static1.squarespace.com/static/5e2a0de2956dec034895902a/t/608f143eaf81a12e0b074da5/1619989570075/CrisisInEducationPoster_SM.jpg?format=1500w" alt="Education Crisis" className="img-fluid rounded shadow" />
          </Col>
        </Row>

        {/* Section: The Science Behind Adveco */}
        <h3 className="text-center mb-4">The Science Behind the Advantage by Adveco</h3>
        <Row className="mb-5">
          <Col md={4} className="mb-4 text-center">
            <div className="icon-container">
              <FaBrain size={60} className="mb-3" />
              <h5>Curiosity</h5>
              <p>Discover the joy of learning through immediate rewards.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <div className="icon-container">
              <FaGraduationCap size={60} className="mb-3" />
              <h5>Mastery</h5>
              <p>Progress step by step toward meaningful skills.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <div className="icon-container">
              <GiCompass size={60} className="mb-3" />
              <h5>Autonomy</h5>
              <p>Take control of your path and goals.</p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4} className="mb-4 text-center">
            <div className="icon-container">
              <FaUsers size={60} className="mb-3" />
              <h5>Purpose</h5>
              <p>Learn with intent, creating a lasting impact.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <div className="icon-container">
              <GiCompass size={60} className="mb-3" />
              <h5>Autotelicity</h5>
              <p>Immerse yourself fully in the learning experience.</p>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="success" size="lg" className="shadow-lg cta-button">
            Curious? Let's Talk
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhyAdveco;
