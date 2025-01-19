import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
//import { FaUsers, FaUsersCog, FaRocket, FaRegUser, FaComments, FaFreeCodeCamp, FaPencilAlt, FaRegHandshake, FaTasks, FaPen, FaSearch, FaTrophy, FaGamepad } from "react-icons/fa"; // Importing icons
import "./ProductTools.css";
//import { FaRegUser, FaBusinessTime, FaBriefcase } from "react-icons/fa"; // Importing icons

import { 
    FaUsers, FaUsersCog, FaRocket, FaRegUser, FaComments, FaFreeCodeCamp, 
    FaPencilAlt, FaRegHandshake, FaTasks, FaPen, FaSearch, FaTrophy, FaGamepad, 
    FaBusinessTime, FaBriefcase 
  } from "react-icons/fa"; // Importing all icons
  

const ProductTools = () => {
  return (
    <section className="product-tools py-5">
      {/* Header Section */}
      <Container>
        <Row>
          <Col>
            <h1 className="display-4 text-center mb-4">
              Transforming Learning Through Innovative Tools
            </h1>
            <p className="text-center text-muted">
              Explore how AdVantage Ecosystem's products empower communities and learners to collaborate, grow, and thrive in an ever-evolving educational landscape.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Products Section */}
      <Container className="my-5">
        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="tool-card shadow-lg rounded">
              <Card.Body>
                <FaUsers size={50} className="text-primary mb-3" />
                <Card.Title>Community Spaces</Card.Title>
                <Card.Text>
                  Community Spaces is a dedicated social networking platform for learners, communities, and organizations to foster engagement and collaboration. Designed to empower leaders and members alike, it provides a dynamic environment where knowledge-sharing thrives, ideas are exchanged, and relationships grow.
                </Card.Text>
                <ul className="feature-list">
                  <li><FaRegUser /> <strong> Profile Creation:</strong> Build personalized profiles for communities.</li>
                  <li><FaComments /> <strong>Member Engagement:</strong> Foster vibrant discussions and interactions.</li>
                  <li><FaFreeCodeCamp /> <strong>Discussion Forums:</strong> Create dedicated chat rooms for seamless communication.</li>
                  <li><FaFreeCodeCamp /> <strong>Freemium Model:</strong> Access core features for free.</li>
                </ul>
                <div className="mt-3">
                  <Button variant="prima" className="me-2">Get Started</Button>
                  <Button variant="outline-prima">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <img
              src="https://images.stockcake.com/public/a/d/f/adfa600d-c583-4306-929a-d963f8b611ee_large/creative-workspace-community-stockcake.jpg"
              alt="Community Spaces"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="order-lg-2 mb-4">
            <Card className="tool-card shadow-lg rounded">
              <Card.Body>
                <FaUsersCog size={50} className="text-primary mb-3" />
                <Card.Title>Microcampus Platforms</Card.Title>
                <Card.Text>
                  Microcampus Platforms enable immersive, structured learning experiences by bringing together tools and strategies to foster collaboration, creativity, and productivity. Designed with a neuroscience-backed approach, the platform emphasizes task engagement and goal alignment to ensure meaningful outcomes for learners and communities.
                </Card.Text>
                <ul className="feature-list">
                  <li><FaPencilAlt /> <strong>Collaborative Whiteboards:</strong> Brainstorm and organize ideas seamlessly.</li>
                  <li><FaRegHandshake /> <strong>Real-Time Document Editing:</strong> Work on shared documents collaboratively.</li>
                  <li><FaTasks /> <strong>Task Management:</strong> Assign and track tasks effectively.</li>
                  <li><FaPen /> <strong>Integrated Feedback Loops:</strong> Provide and receive peer feedback.</li>
                  <li><FaSearch /> <strong>Purpose-Driven Workflows:</strong> Align tasks with overarching goals.</li>
                </ul>
                <div className="mt-3">
                  <Button variant="prima" className="me-2">Get Started</Button>
                  <Button variant="outline-prim">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="order-lg-1">
            <img
              src="https://cms-resources.prod.the-internal.cloud/sites/default/files/styles/featured_image/public/2023-11/iStock-collaboration.jpg?itok=9i24FJQy"
              alt="Microcampus Platforms"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="tool-card shadow-lg rounded">
              <Card.Body>
                <FaRocket size={50} className="text-primary mb-3" />
                <Card.Title>Quest Labs</Card.Title>
                <Card.Text>
                  Quest Labs transforms traditional learning into an exciting, hands-on journey. By leveraging gamification, it provides structured challenges and immersive learning paths that inspire curiosity, ignite motivation, and build mastery.
                </Card.Text>
                <ul className="feature-list">
                  <li><FaGamepad /> <strong>Gamified Challenges:</strong> Complete skill-based quests in a fun environment.</li>
                  <li><FaTrophy /> <strong>Interactive Learning Paths:</strong> Tailored paths guide users through learning experiences.</li>
                  <li><FaTrophy /> <strong>Skill-Building Simulations:</strong> Practice knowledge through realistic scenarios.</li>
                  <li><FaTrophy /> <strong>Progress Tracking and Rewards:</strong> Monitor achievements and earn rewards.</li>
                  <li><FaRegUser /> <strong>Community Engagement:</strong> Collaborate with peers to solve challenges.</li>
                </ul>
                <div className="mt-3">
                  <Button variant="" className="me-2">Get Started</Button>
                  <Button variant="outline-prima">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <img
              src="https://erepublic.brightspotcdn.com/dims4/default/e6f1878/2147483647/strip/false/crop/3000x1688+0+156/resize/1200x675!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F91%2F77%2Fd3d6c42448289d8e42a1ddc02423%2Fgamification.jpg"
              alt="Quest Labs"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>

     

{/* Pricing Section */}
<div className="pricing-section py-5 bg-light">
  <Container>
    <h2 className="text-center mb-5">Choose Your Plan</h2>
    <Row className="justify-content-center">
      {[ // Pricing plans array
        {
          title: "Personal",
          price: "$0/month",
          icon: <FaRegUser size={50} className="text-primary" />,
          features: [
            "1 Collaborative Space",
            "Basic Analytics",
            "Insights Panel for simple data tracking",
            "Share Features to distribute resources",
          ],
        },
        {
          title: "Professional",
          price: "$10/month",
          icon: <FaBusinessTime size={50} className="text-primary" />,
          features: [
            "3 Collaborative Spaces",
            "1 Quest Lab",
            "Advanced Analytics",
            "Enhanced Insights Panel",
          ],
        },
        {
          title: "Business",
          price: "$30/month",
          icon: <FaBriefcase size={50} className="text-primary" />,
          features: [
            "Unlimited Collaborative Spaces",
            "Unlimited Quest Labs",
            "Comprehensive Analytics",
            "Event Management Tools",
          ],
        },
      ].map((plan, index) => (
        <Col md={4} key={index} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body className="text-center">
              <div className="mb-3 d-flex justify-content-center align-items-center">
                {plan.icon}
              </div> {/* Centering the icon */}
              <Card.Title className="mb-3">{plan.title}</Card.Title>
              <h3 className="text-prima mb-3">{plan.price}</h3>
              <ul className="list-unstyled">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button variant="" className="mt-3">
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</div>

    </section>
  );
};

export default ProductTools;
