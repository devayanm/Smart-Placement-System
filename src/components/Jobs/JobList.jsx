import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const JobList = () => {
    const navigate = useNavigate();

    // Example job data
    const jobs = [
        { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'Bangalore', description: 'Build scalable software solutions.' },
        { id: 2, title: 'Data Scientist', company: 'DataCorp', location: 'Delhi', description: 'Analyze complex datasets for insights.' },
        { id: 3, title: 'Frontend Developer', company: 'WebWorks', location: 'Remote', description: 'Create responsive web interfaces.' },
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
                            style={{
                                borderRadius: '15px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <Card.Body>
                                <Card.Title className="fw-bold">{job.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Location:</strong> {job.location}
                                </Card.Text>
                                <Card.Text>
                                    {job.description.length > 50
                                        ? job.description.substring(0, 50) + '...'
                                        : job.description}
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => handleViewDetails(job.id)}
                                    style={{
                                        fontWeight: '600',
                                        borderRadius: '50px',
                                    }}
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default JobList;
