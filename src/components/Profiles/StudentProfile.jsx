import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Card, Toast, Modal, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

const StudentProfile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@student.com',
        phone: '1234567890',
        course: 'Computer Science',
        university: 'XYZ University',
        graduationYear: '2024',
        gpa: '3.8',
        skills: ['JavaScript', 'React', 'Python'],
        profilePicture: 'https://via.placeholder.com/150',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
        portfolio: 'https://johndoeportfolio.com',
        achievements: ['Completed 100 hours of coding tutorials', 'Won 1st place in hackathon'],
        certifications: ['AWS Certified Solutions Architect', 'Certified Scrum Master'],
        experience: [
            {
                title: 'Software Engineering Intern',
                company: 'TechCorp',
                duration: 'June 2023 - August 2023',
                description: 'Worked on full-stack development using React and Node.js'
            },
            {
                title: 'Junior Web Developer',
                company: 'WebWorks',
                duration: 'January 2022 - May 2023',
                description: 'Developed and maintained websites for various clients using HTML, CSS, and JavaScript.'
            }
        ],
        languages: ['English (Fluent)', 'Spanish (Intermediate)'],
        preferredRoles: ['Frontend Developer', 'React Developer'],
        professionalSummary: 'A passionate and driven software engineer with a keen interest in web development. Looking to contribute to innovative projects in the tech industry.'
    });

    const [formData, setFormData] = useState({ ...profile });
    const [isEditing, setIsEditing] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        setProfile({ ...formData });
        setIsEditing(false);
        setShowToast(true);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChangePassword = () => {
        alert('Password changed successfully!');
        setShowChangePasswordModal(false);
    };

    return (
        <Container className="py-5">
            {/* Profile Picture at the top */}
            <Row className="justify-content-center mb-4">
                <Col md={4} className="text-center">
                    <div className="profile-picture-container mb-3">
                        <img
                            src={formData.profilePicture}
                            alt="Profile"
                            className="rounded-circle border border-4 border-primary"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        {isEditing && (
                            <Form.Group controlId="profilePicture" className="mt-3">
                                <Form.Label>Change Profile Picture</Form.Label>
                                <Form.Control type="file" onChange={handleFileChange} />
                            </Form.Group>
                        )}
                    </div>
                    <h4>{formData.name}</h4>
                    <p className="text-muted">{formData.professionalSummary}</p>
                </Col>
            </Row>

            {/* Main Profile Details Section */}
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg rounded-lg">
                        <Card.Body>
                            {isEditing ? (
                                <Form>
                                    <Form.Group controlId="name" className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="email" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="phone" className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="course" className="mb-3">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            placeholder="Enter your course"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="university" className="mb-3">
                                        <Form.Label>University</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="university"
                                            value={formData.university}
                                            onChange={handleChange}
                                            placeholder="Enter your university name"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="graduationYear" className="mb-3">
                                        <Form.Label>Graduation Year</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="graduationYear"
                                            value={formData.graduationYear}
                                            onChange={handleChange}
                                            placeholder="Enter your graduation year"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="gpa" className="mb-3">
                                        <Form.Label>GPA</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="gpa"
                                            value={formData.gpa}
                                            onChange={handleChange}
                                            placeholder="Enter your GPA"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="skills" className="mb-3">
                                        <Form.Label>Skills</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="skills"
                                            value={formData.skills.join(', ')}
                                            onChange={handleChange}
                                            placeholder="Enter your skills separated by commas"
                                        />
                                    </Form.Group>

                                    <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                                </Form>
                            ) : (
                                <div>
                                    <p><strong>Email:</strong> {formData.email}</p>
                                    <p><strong>Phone:</strong> {formData.phone}</p>
                                    <p><strong>Course:</strong> {formData.course}</p>
                                    <p><strong>University:</strong> {formData.university}</p>
                                    <p><strong>Graduation Year:</strong> {formData.graduationYear}</p>
                                    <p><strong>GPA:</strong> {formData.gpa}</p>
                                    <p><strong>Skills:</strong> {formData.skills.join(', ')}</p>

                                    <h5>Experience</h5>
                                    <ListGroup>
                                        {formData.experience.map((exp, index) => (
                                            <ListGroup.Item key={index}>
                                                <strong>{exp.title}</strong> at {exp.company} <br />
                                                <em>{exp.duration}</em><br />
                                                <p>{exp.description}</p>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>

                                    <h5>Certifications</h5>
                                    <ListGroup>
                                        {formData.certifications.map((cert, index) => (
                                            <ListGroup.Item key={index}>{cert}</ListGroup.Item>
                                        ))}
                                    </ListGroup>

                                    <h5>Achievements</h5>
                                    <ListGroup>
                                        {formData.achievements.map((ach, index) => (
                                            <ListGroup.Item key={index}>{ach}</ListGroup.Item>
                                        ))}
                                    </ListGroup>

                                    <h5>Languages</h5>
                                    <p>{formData.languages.join(', ')}</p>

                                    <h5>Preferred Job Roles</h5>
                                    <p>{formData.preferredRoles.join(', ')}</p>

                                    <h5>Portfolio</h5>
                                    <p><a href={formData.portfolio} target="_blank" rel="noopener noreferrer">My Portfolio</a></p>

                                    <h5>LinkedIn</h5>
                                    <p><a href={formData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>

                                    <h5>GitHub</h5>
                                    <p><a href={formData.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>

                                    <Button variant="warning" onClick={handleEdit}>Edit Profile</Button>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Success Toast */}
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                className="position-fixed bottom-0 end-0 m-3"
            >
                <Toast.Body>Profile updated successfully!</Toast.Body>
            </Toast>

            {/* Change Password Modal */}
            <Modal show={showChangePasswordModal} onHide={() => setShowChangePasswordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="oldPassword">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={passwordData.oldPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                                placeholder="Enter your old password"
                            />
                        </Form.Group>
                        <Form.Group controlId="newPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                placeholder="Enter your new password"
                            />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                placeholder="Confirm your new password"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowChangePasswordModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleChangePassword}>
                        Change Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default StudentProfile;
