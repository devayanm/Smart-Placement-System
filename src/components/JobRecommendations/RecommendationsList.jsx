import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaLocationArrow, FaRegMoneyBillAlt, FaClock, FaStar } from 'react-icons/fa';

const RecommendationsList = () => {
    const navigate = useNavigate();

    // Enhanced job recommendations data
    const recommendations = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'TechCorp',
            companyLogo: '/images/techcorp-logo.png',
            location: 'Bangalore',
            type: 'Full-time',
            salaryRange: '₹8L - ₹12L',
            description: 'Build scalable software solutions.',
            rating: 4.5
        },
        {
            id: 2,
            title: 'Data Scientist',
            company: 'DataCorp',
            companyLogo: '/images/datacorp-logo.png',
            location: 'Delhi',
            type: 'Part-time',
            salaryRange: '₹6L - ₹10L',
            description: 'Analyze complex datasets for insights.',
            rating: 4.0
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'WebWorks',
            companyLogo: '/images/webworks-logo.png',
            location: 'Remote',
            type: 'Contract',
            salaryRange: '₹7L - ₹11L',
            description: 'Create responsive web interfaces.',
            rating: 4.8
        },
    ];

    const handleDetails = (id) => {
        navigate(`/job-recommendations/${id}`);
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5 text-primary">Job Recommendations</h1>

            {recommendations.length > 0 ? (
                <Row className="g-4">
                    {recommendations.map((job) => (
                        <Col key={job.id} md={4}>
                            <Card className="shadow-lg border-0 rounded-4 transition-all hover-shadow">
                                <Card.Body>
                                    <Row className="align-items-center">
                                        <Col xs="auto">
                                            <img src={job.companyLogo} alt={job.company} className="img-fluid rounded-circle" width="50" height="50" />
                                        </Col>
                                        <Col>
                                            <Card.Title className="h4 font-weight-bold text-dark mb-2">{job.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Card.Text className="text-muted mb-3">
                                        <FaLocationArrow className="me-2" />
                                        {job.location}
                                    </Card.Text>
                                    <Card.Text className="text-muted mb-3">
                                        <FaClock className="me-2" />
                                        {job.type}
                                    </Card.Text>
                                    <Card.Text className="text-muted mb-3">
                                        <FaRegMoneyBillAlt className="me-2" />
                                        {job.salaryRange}
                                    </Card.Text>
                                    <Card.Text className="text-muted mb-3">
                                        <strong>Description:</strong> {job.description}
                                    </Card.Text>
                                    <Row>
                                        <Col>
                                            <Badge bg="info">{job.rating} <FaStar className="text-warning" /></Badge>
                                        </Col>
                                        <Col className="text-end">
                                            <Button
                                                variant="primary"
                                                onClick={() => handleDetails(job.id)}
                                                className="w-80 py-1 text-uppercase font-sm"
                                            >
                                                View Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <p className="text-center text-muted">Currently, no job recommendations are available.</p>
            )}
        </Container>
    );
};

export default RecommendationsList;
