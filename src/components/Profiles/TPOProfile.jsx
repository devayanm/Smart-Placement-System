import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Form, Image, ListGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaUniversity, FaLinkedin, FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

const TPOProfile = () => {
    const [tpo, setTpo] = useState({
        name: 'Jane Smith',
        email: 'jane.smith@college.com',
        phone: '1122334455',
        department: 'Placement Cell',
        role: 'Training and Placement Officer',
        photo: 'https://via.placeholder.com/150',
        qualifications: [
            'Master of Business Administration (MBA) in Human Resources',
            'Bachelor of Technology in Computer Science',
        ],
        experience: [
            'Placement Coordinator at XYZ College (2015-2018)',
            'HR Executive at ABC Tech Solutions (2012-2015)',
        ],
        skills: ['Leadership', 'Negotiation', 'Event Planning', 'Recruitment'],
        linkedin: 'https://linkedin.com/in/janesmith',
        upcomingDrives: ['TechCorp Recruitment Drive (Jan 2025)', 'XYZ Soft Inc. Internship Program (Feb 2025)'],
        certifications: ['Certified Placement Officer', 'Negotiation Skills Certification'],
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...tpo });
    const [showEditModal, setShowEditModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveChanges = () => {
        setTpo({ ...formData });
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
                    {/* TPO Info Card */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col md={3} className="text-center">
                                    {/* TPO Photo */}
                                    <Image
                                        src={tpo.photo}
                                        alt="TPO Photo"
                                        className="img-fluid rounded-circle border"
                                        style={{ width: '150px', height: '150px' }}
                                    />
                                </Col>
                                <Col md={9}>
                                    <h4 className="font-weight-bold text-primary">{tpo.name}</h4>
                                    <p><strong>Role:</strong> {tpo.role}</p>
                                    <p><strong>Department:</strong> {tpo.department}</p>
                                    <p><strong>Email:</strong> <a href={`mailto:${tpo.email}`} className="text-decoration-none"><FaEnvelope /> {tpo.email}</a></p>
                                    <p><strong>Phone:</strong> <a href={`tel:${tpo.phone}`} className="text-decoration-none"><FaPhoneAlt /> {tpo.phone}</a></p>
                                    <p><strong>LinkedIn:</strong> <a href={tpo.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none"><FaLinkedin /> LinkedIn Profile</a></p>
                                    <Button variant="primary" className="mt-3" onClick={handleEdit}>Edit Profile</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Qualifications */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5><FaGraduationCap /> Educational Qualifications</h5>
                            <ListGroup variant="flush">
                                {tpo.qualifications.map((qual, index) => (
                                    <ListGroup.Item key={index}>{qual}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Experience */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5><FaChalkboardTeacher /> Work Experience</h5>
                            <ListGroup variant="flush">
                                {tpo.experience.map((exp, index) => (
                                    <ListGroup.Item key={index}>{exp}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Skills */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5>Skills</h5>
                            <ul>
                                {tpo.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>

                    {/* Upcoming Placement Drives */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5>Upcoming Placement Drives</h5>
                            <ListGroup variant="flush">
                                {tpo.upcomingDrives.map((drive, index) => (
                                    <ListGroup.Item key={index}>{drive}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Certifications */}
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <h5>Certifications</h5>
                            <ListGroup variant="flush">
                                {tpo.certifications.map((cert, index) => (
                                    <ListGroup.Item key={index}>{cert}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal for editing TPO profile */}
            <Modal show={showEditModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit TPO Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
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
                        <Form.Group controlId="department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Enter department"
                            />
                        </Form.Group>
                        <Form.Group controlId="role">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Enter role"
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

export default TPOProfile;
