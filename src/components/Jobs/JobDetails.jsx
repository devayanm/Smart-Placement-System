import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Tab, Nav, Alert, Badge } from 'react-bootstrap';
import { FaShareAlt, FaHeart, FaLocationArrow, FaRegMoneyBillAlt, FaRegClock } from 'react-icons/fa';

// Example job data with additional information
const jobs = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'TechCorp',
        companyLogo: '/images/techcorp-logo.png',
        location: 'Bangalore',
        description: 'Build scalable software solutions.',
        requirements: 'Experience in JavaScript, React, Node.js',
        companyInfo: 'TechCorp is a leading software development company focused on innovation.',
        salaryRange: '₹8L - ₹12L',
        benefits: 'Health Insurance, Paid Time Off, Retirement Plans',
        postingDate: '2024-11-01',
        rating: 4.5
    },
    {
        id: 2,
        title: 'Data Scientist',
        company: 'DataCorp',
        companyLogo: '/images/datacorp-logo.png',
        location: 'Delhi',
        description: 'Analyze complex datasets for insights.',
        requirements: 'Expert in Python, Machine Learning, and Data Analysis',
        companyInfo: 'DataCorp specializes in providing analytics solutions to businesses worldwide.',
        salaryRange: '₹6L - ₹10L',
        benefits: 'Flexible Working Hours, Health Insurance, Stock Options',
        postingDate: '2024-10-15',
        rating: 4.0
    },
    {
        id: 3,
        title: 'Frontend Developer',
        company: 'WebWorks',
        companyLogo: '/images/webworks-logo.png',
        location: 'Remote',
        description: 'Create responsive web interfaces.',
        requirements: 'Proficiency in HTML, CSS, JavaScript, and React.js',
        companyInfo: 'WebWorks is a creative agency delivering high-quality web development.',
        salaryRange: '₹7L - ₹11L',
        benefits: 'Work From Home, Paid Sick Leave, Health Insurance',
        postingDate: '2024-12-05',
        rating: 4.8
    },
];

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the job by ID
    const job = jobs.find((job) => job.id === parseInt(id));

    if (!job) {
        return <Alert variant="danger">Job not found!</Alert>;
    }

    const handleApply = () => {
        navigate(`/jobs/apply/${id}`); // Navigate to the job application page
    };

    const handleShare = () => {
        const shareLink = window.location.href;
        navigator.clipboard.writeText(shareLink).then(() => alert('Job link copied to clipboard!'));
    };

    const handleFavorite = () => {
        alert('Job added to favorites!');
    };

    const relatedJobs = jobs.filter((j) => j.id !== parseInt(id)); // Simulate related jobs

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="align-items-center mb-3">
                                <Col xs="auto">
                                    <img src={job.companyLogo} alt={job.company} className="img-fluid rounded-circle" width="50" height="50" />
                                </Col>
                                <Col>
                                    <Card.Title className="h4 font-weight-bold text-dark">{job.title}</Card.Title>
                                    <Card.Subtitle className="text-muted">{job.company}</Card.Subtitle>
                                </Col>
                                <Col xs="auto">
                                    <Button variant="outline-danger" onClick={handleFavorite}><FaHeart /></Button>
                                </Col>
                            </Row>

                            <Card.Text><strong>Location:</strong> {job.location} <FaLocationArrow className="ms-2" /></Card.Text>
                            <Card.Text><strong>Salary Range:</strong> {job.salaryRange} <FaRegMoneyBillAlt className="ms-2" /></Card.Text>
                            <Card.Text><strong>Posted on:</strong> {new Date(job.postingDate).toLocaleDateString()}</Card.Text>
                            <Card.Text><strong>Rating:</strong> {job.rating} <Badge bg="warning">{job.rating}</Badge></Card.Text>

                            {/* Tabs for job details */}
                            <Tab.Container id="job-details-tabs" defaultActiveKey="overview">
                                <Nav variant="tabs" className="justify-content-center mb-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="overview">Overview</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="requirements">Requirements</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="company">Company Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="benefits">Benefits</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="overview">
                                        <Card.Text>{job.description}</Card.Text>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="requirements">
                                        <Card.Text>{job.requirements}</Card.Text>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="company">
                                        <Card.Text>{job.companyInfo}</Card.Text>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="benefits">
                                        <Card.Text>{job.benefits}</Card.Text>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <Button variant="primary" onClick={handleApply}>Apply Now</Button>
                                <Button variant="outline-secondary" onClick={handleShare}><FaShareAlt /> Share</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Related Jobs Section */}
                    <div className="mt-4">
                        <h5>Related Jobs</h5>
                        <Row>
                            {relatedJobs.map((relatedJob) => (
                                <Col key={relatedJob.id} md={4} className="mb-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{relatedJob.title}</Card.Title>
                                            <Card.Subtitle className="text-muted">{relatedJob.company}</Card.Subtitle>
                                            <Button variant="link" onClick={() => navigate(`/jobs/${relatedJob.id}`)}>View Details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default JobDetails;
