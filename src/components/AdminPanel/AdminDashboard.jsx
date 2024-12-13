import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { FaUsers, FaBriefcase, FaCog } from 'react-icons/fa'; // For adding icons to the dashboard

const AdminDashboard = () => {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">Admin Dashboard</h1>
            <p className="text-center mb-4">Welcome to the admin dashboard. Here you can manage users, jobs, and platform settings.</p>

            {/* Stats Section */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="shadow-sm text-center" style={{ padding: '20px' }}>
                        <Card.Title>Total Users</Card.Title>
                        <Card.Text>1,250</Card.Text>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm text-center" style={{ padding: '20px' }}>
                        <Card.Title>Total Jobs Posted</Card.Title>
                        <Card.Text>350</Card.Text>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm text-center" style={{ padding: '20px' }}>
                        <Card.Title>Active Job Listings</Card.Title>
                        <Card.Text>120</Card.Text>
                    </Card>
                </Col>
            </Row>

            {/* Quick Links Section */}
            <div style={{ marginTop: '20px' }}>
                <h3>Quick Links</h3>
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="shadow-sm text-center">
                            <Card.Body>
                                <FaUsers size={40} className="mb-3" />
                                <Card.Title>Manage Users</Card.Title>
                                <Button variant="primary" className="w-100">Go to Users</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm text-center">
                            <Card.Body>
                                <FaBriefcase size={40} className="mb-3" />
                                <Card.Title>View Job Listings</Card.Title>
                                <Button variant="primary" className="w-100">View Jobs</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm text-center">
                            <Card.Body>
                                <FaCog size={40} className="mb-3" />
                                <Card.Title>Platform Settings</Card.Title>
                                <Button variant="primary" className="w-100">Configure Settings</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AdminDashboard;
