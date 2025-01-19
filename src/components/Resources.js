import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Resources.css";

function Resources() {
  const blogs = [
    {
      id: 1,
      title: "Comprehensive Blog Resource",
      description: "A detailed guide available for download.",
      img: "https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1495.jpg?semt=ais_hybrid",
      link: "https://drive.google.com/file/d/18gUQjF4N6nUxWYxOY7Zgz05zGz3B3Dc1/view",
    },
  ];

  const tutorials = [
    {
      id: 1,
      title: "How to Use the AdVantage Platform",
      description: "Step-by-step tutorial to get started.",
      img: "https://img.youtube.com/vi/-tOC9-JCKGY/0.jpg",
      link: "https://youtu.be/-tOC9-JCKGY?si=O8kU1CzMpsHhSh2r",
    },
    {
      id: 2,
      title: "Advanced Features Overview",
      description: "Learn about advanced features and tools.",
      img: "https://img.youtube.com/vi/4H1x9rKnQTc/0.jpg",
      link: "https://youtu.be/4H1x9rKnQTc",
    },
  ];

  return (
    <section className="resources-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="section-title">Resources</h1>
          <p className="lead text-muted">
            Enhance your learning with detailed blogs and interactive tutorials.
          </p>
        </div>

        {/* Blogs Section */}
        <div className="mb-5">
          <h2 className="section-subtitle">Blogs</h2>
          <Row>
            {blogs.map((blog) => (
              <Col key={blog.id} xs={12} sm={6} lg={4} className="mb-4">
                <Card className="h-100 shadow resource-card">
                  <Card.Img variant="top" src={blog.img} alt={blog.title} />
                  <Card.Body>
                    <Card.Title className="fw-bold">{blog.title}</Card.Title>
                    <Card.Text className="text-muted">{blog.description}</Card.Text>
                    <Button
                      variant="primary"
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-100"
                    >
                      View Blog
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Tutorials Section */}
        <div>
          <h2 className="section-subtitle">Tutorials</h2>
          <Row>
            {tutorials.map((tutorial) => (
              <Col key={tutorial.id} xs={12} sm={6} lg={4} className="mb-4">
                <Card className="h-100 shadow resource-card">
                  <Card.Img variant="top" src={tutorial.img} alt={tutorial.title} />
                  <Card.Body>
                    <Card.Title className="fw-bold">{tutorial.title}</Card.Title>
                    <Card.Text className="text-muted">{tutorial.description}</Card.Text>
                    <Button
                      variant="primary"
                      href={tutorial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-100"
                    >
                      Watch Tutorial
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Resources;
