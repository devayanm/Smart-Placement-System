import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCheckCircle, FaRegClock } from 'react-icons/fa';

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Example job data
    const jobs = [
        { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'Bangalore', description: 'Build scalable software solutions.', skills: 'React, Node.js, JavaScript', salary: '₹8,00,000 per year', jobType: 'Full-time', benefits: 'Health insurance, Paid vacation', deadline: '2024-12-31' },
        { id: 2, title: 'Data Scientist', company: 'DataCorp', location: 'Delhi', description: 'Analyze complex datasets for insights.', skills: 'Python, SQL, Machine Learning', salary: '₹10,00,000 per year', jobType: 'Full-time', benefits: 'Retirement plan, Performance bonus', deadline: '2024-12-25' },
        { id: 3, title: 'Frontend Developer', company: 'WebWorks', location: 'Remote', description: 'Create responsive web interfaces.', skills: 'HTML, CSS, JavaScript, React', salary: '₹7,00,000 per year', jobType: 'Contract', benefits: 'Work-from-home, Stock options', deadline: '2024-12-20' },
    ];

    const job = jobs.find((job) => job.id === parseInt(id));

    if (!job) {
        return <p>Job not found!</p>;
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card className="shadow-lg rounded-3 border-0">
                        <Card.Body>
                            <Card.Title className="text-center mb-4 text-uppercase text-primary">{job.title}</Card.Title>
                            <Card.Subtitle className="text-center text-muted mb-3">{job.company}</Card.Subtitle>

                            <Row className="mb-4">
                                <Col sm={6}>
                                    <p><strong>Location:</strong> {job.location}</p>
                                    <p><strong>Salary:</strong> {job.salary}</p>
                                    <p><strong>Job Type:</strong> {job.jobType}</p>
                                </Col>
                                <Col sm={6}>
                                    <p><strong>Skills Required:</strong> {job.skills}</p>
                                    <p><strong>Application Deadline:</strong> {job.deadline}</p>
                                </Col>
                            </Row>

                            <Card.Text className="mb-4">
                                <strong>Description:</strong> {job.description}
                            </Card.Text>

                            <div className="mb-4">
                                <Badge pill bg="info" className="me-2">{job.benefits}</Badge>
                            </div>

                            <Row className="mt-4">
                                <Col>
                                    <Button
                                        variant="success"
                                        onClick={() => alert('You have applied for the job!')}
                                        style={{ fontSize: '12px', padding: '6px 12px' }}  // Smaller padding
                                        className="d-inline-block mx-auto"
                                    >
                                        <FaCheckCircle className="me-2" />
                                        Apply Now
                                    </Button>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => navigate(-1)}
                                        style={{ fontSize: '12px', padding: '6px 12px' }}  // Smaller padding
                                        className="d-inline-block mx-auto"
                                    >
                                        <FaRegClock className="me-2" />
                                        Back to Recommendations
                                    </Button>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default JobDetails;
