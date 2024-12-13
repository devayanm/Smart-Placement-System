import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { FaRegClock, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

const ApplicationDetails = () => {
    const { id } = useParams();

    // Example application details (replace with real data from API)
    const application = {
        id: id,
        jobTitle: 'Software Engineer',
        companyName: 'TechCorp',
        appliedOn: '2024-12-01',
        status: 'Pending',
        description: 'You have applied for the Software Engineer role at TechCorp. Your application is currently under review.',
    };

    // Function to render status badge
    const renderStatusBadge = (status) => {
        switch (status) {
            case 'Accepted':
                return <Badge bg="success">Accepted <FaRegCheckCircle className="ms-2" /></Badge>;
            case 'Pending':
                return <Badge bg="warning">Pending <FaRegClock className="ms-2" /></Badge>;
            case 'Rejected':
                return <Badge bg="danger">Rejected <FaRegTimesCircle className="ms-2" /></Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h3 className="text-center mb-4">Application Details</h3>

                            {/* Job Title and Company Name */}
                            <h5>{application.jobTitle} at {application.companyName}</h5>
                            <div className="mb-3">
                                {renderStatusBadge(application.status)}
                            </div>

                            {/* Application Date */}
                            <p><strong>Applied On:</strong> {application.appliedOn}</p>

                            {/* Application Description */}
                            <div className="mb-3">
                                <strong>Description:</strong>
                                <p>{application.description}</p>
                            </div>

                            {/* Action Button */}
                            <div className="d-flex justify-content-between">
                                <Button variant="primary" href={`/applications`} className="w-48">
                                    Back to Applications
                                </Button>
                                <Button variant="outline-primary" href={`/applications/${application.id}/edit`} className="w-48">
                                    Edit Application
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ApplicationDetails;
