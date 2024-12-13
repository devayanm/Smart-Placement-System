import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Form, ListGroup, Image } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const CompanyProfile = () => {
    const [company, setCompany] = useState({
        name: 'TechCorp',
        email: 'contact@techcorp.com',
        phone: '9876543210',
        industry: 'Software Development',
        description: 'We build innovative software solutions for clients worldwide.',
        logo: 'https://via.placeholder.com/150',
        address: '123 Tech Street, Silicon Valley, CA',
        linkedin: 'https://linkedin.com/company/techcorp',
        twitter: 'https://twitter.com/techcorp',
        facebook: 'https://facebook.com/techcorp',
        openPositions: [
            { title: 'Frontend Developer', location: 'Remote', description: 'Develop user-facing features using React.' },
            { title: 'Backend Developer', location: 'San Francisco, CA', description: 'Work with Node.js and build scalable APIs.' }
        ],
        companyStats: { employees: '500+', yearsInBusiness: '10', annualRevenue: '$50M' },
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...company });
    const [showEditModal, setShowEditModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveChanges = () => {
        setCompany({ ...formData });
        setShowEditModal(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setIsEditing(false);
        setShowEditModal(false);
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    {/* Company Info Card */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col md={3} className="text-center">
                                    {/* Company Logo */}
                                    <Image
                                        src={company.logo}
                                        alt="Company Logo"
                                        className="img-fluid rounded-circle border"
                                        style={{ width: '150px', height: '150px' }}
                                    />
                                </Col>
                                <Col md={9}>
                                    <h4 className="font-weight-bold text-primary">{company.name}</h4>
                                    <p><strong>Industry:</strong> {company.industry}</p>
                                    <p><strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-decoration-none">{company.email}</a></p>
                                    <p><strong>Phone:</strong> <a href={`tel:${company.phone}`} className="text-decoration-none">{company.phone}</a></p>
                                    <p><strong>Address:</strong> {company.address}</p>
                                    <p><strong>Description:</strong> {company.description}</p>

                                    <Button variant="primary" className="mt-3" onClick={handleEdit}>Edit Profile</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Company Stats Card */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5>Company Stats</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Employees:</strong> {company.companyStats.employees}</ListGroup.Item>
                                <ListGroup.Item><strong>Years in Business:</strong> {company.companyStats.yearsInBusiness}</ListGroup.Item>
                                <ListGroup.Item><strong>Annual Revenue:</strong> {company.companyStats.annualRevenue}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Open Positions Card */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5>Open Positions</h5>
                            <ListGroup variant="flush">
                                {company.openPositions.map((position, index) => (
                                    <ListGroup.Item key={index}>
                                        <strong>{position.title}</strong> ({position.location}) <br />
                                        <p>{position.description}</p>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Follow Us Card */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5>Follow Us</h5>
                            <p>
                                <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={24} className="me-3" />
                                </a>
                                <a href={company.twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={24} className="me-3" />
                                </a>
                                <a href={company.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={24} className="me-3" />
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal for editing company profile */}
            <Modal show={showEditModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Company Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter company name"
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter phone number"
                            />
                        </Form.Group>
                        <Form.Group controlId="industry">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control
                                type="text"
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                placeholder="Enter industry"
                            />
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Company Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter company address"
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Enter company description"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default CompanyProfile;
