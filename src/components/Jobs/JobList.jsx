import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRegFileAlt } from 'react-icons/fa';

const JobList = () => {
    const navigate = useNavigate();

    // Example job data with additional info
    const jobs = [
        { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'Bangalore', description: 'Build scalable software solutions.', jobType: 'Full-time' },
        { id: 2, title: 'Data Scientist', company: 'DataCorp', location: 'Delhi', description: 'Analyze complex datasets for insights.', jobType: 'Full-time' },
        { id: 3, title: 'Frontend Developer', company: 'WebWorks', location: 'Remote', description: 'Create responsive web interfaces.', jobType: 'Contract' },
    ];

    const handleViewDetails = (id) => {
        navigate(`/jobs/${id}`);
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">Available Jobs</h1>
            <Row className="g-4">
                {jobs.map((job) => (
                    <Col md={4} key={job.id}>
                        <Card
                            className="h-100 shadow-sm rounded-lg border-0"
                            style={{
                                transition: 'transform 0.3s ease',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold mb-2 text-dark">{job.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                                <Card.Text className="text-muted">
                                    <FaMapMarkerAlt className="me-2" />
                                    {job.location}
                                </Card.Text>
                                <Card.Text className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>
                                    {job.description.length > 50
                                        ? job.description.substring(0, 100) + '...'
                                        : job.description}
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <Badge bg="info" className="text-uppercase">{job.jobType}</Badge>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleViewDetails(job.id)}
                                        style={{
                                            fontWeight: '600',
                                            borderRadius: '50px',
                                        }}
                                    >
                                        <FaRegFileAlt className="me-2" />
                                        View Details
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default JobList;
