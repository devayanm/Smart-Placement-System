import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const EligibilityResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { criteria } = location.state || {};

    // Example data for jobs
    const jobs = [
        { id: 1, title: 'Software Engineer', company: 'TechCorp', cgpa: 8.0, location: 'Bangalore', skills: ['Java', 'React'] },
        { id: 2, title: 'Data Scientist', company: 'DataCorp', cgpa: 7.5, location: 'Delhi', skills: ['Python', 'Machine Learning'] },
        { id: 3, title: 'Frontend Developer', company: 'WebWorks', cgpa: 7.0, location: 'Remote', skills: ['HTML', 'CSS', 'JavaScript'] },
    ];

    const filteredJobs = jobs.filter((job) => {
        const meetsCgpa = !criteria.cgpa || job.cgpa >= parseFloat(criteria.cgpa);
        const meetsLocation = !criteria.location || job.location.toLowerCase().includes(criteria.location.toLowerCase());
        const meetsSkills = !criteria.skills || criteria.skills.split(',').every(skill => job.skills.includes(skill.trim()));
        return meetsCgpa && meetsLocation && meetsSkills;
    });

    const handleRefineSearch = () => {
        navigate('/eligibility');
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">Eligibility Results</h1>

            {/* Show the filters applied */}
            <div className="mb-4">
                <h5>Filters Applied:</h5>
                <p><strong>CGPA:</strong> {criteria.cgpa || 'Not specified'}</p>
                <p><strong>Skills:</strong> {criteria.skills || 'Not specified'}</p>
                <p><strong>Location:</strong> {criteria.location || 'Not specified'}</p>
            </div>

            {filteredJobs.length > 0 ? (
                <Row className="g-4">
                    {filteredJobs.map((job) => (
                        <Col key={job.id} md={4}>
                            <Card className="shadow-sm border-0 rounded-3">
                                <Card.Body>
                                    <Card.Title>{job.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                                    <Card.Text><strong>Location:</strong> {job.location}</Card.Text>
                                    <Card.Text><strong>Required CGPA:</strong> {job.cgpa}</Card.Text>
                                    <Card.Text><strong>Skills:</strong> {job.skills.join(', ')}</Card.Text>
                                    <Button variant="primary" onClick={() => navigate(`/jobs/${job.id}`)} className="w-100">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Alert variant="warning" className="text-center">
                    No jobs match your criteria.
                    <Button variant="link" onClick={handleRefineSearch}>Refine Search</Button>
                </Alert>
            )}
        </Container>
    );
};

export default EligibilityResults;
