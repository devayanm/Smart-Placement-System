import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const JobApply = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null,
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
        if (submitted) validateField(name, value, files);
    };

    const validateField = (name, value, files) => {
        let error = '';
        if (name === 'name' && !value.trim()) {
            error = 'Name is required.';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            error = 'Invalid email format.';
        } else if (name === 'resume' && (!files || !files[0])) {
            error = 'Please upload your resume.';
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some((err) => err);
        if (!hasErrors && formData.name && formData.email && formData.resume) {
            console.log('Application submitted:', formData);
            alert(`Application submitted for job ID: ${id}`);
            navigate('/jobs');
        } else {
            setSubmitted(true);
            validateAll();
        }
    };

    const validateAll = () => {
        Object.keys(formData).forEach((key) =>
            validateField(key, formData[key], key === 'resume' ? [formData[key]] : undefined)
        );
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className="text-center mb-4">Apply for Job ID: {id}</h1>
                    {submitted && Object.values(errors).some((err) => err) && (
                        <Alert variant="danger">Please fix the errors before submitting.</Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formResume" className="mb-4">
                            <Form.Label>Upload Resume</Form.Label>
                            <Form.Control
                                type="file"
                                name="resume"
                                onChange={handleChange}
                                isInvalid={!!errors.resume}
                            />
                            <Form.Control.Feedback type="invalid">{errors.resume}</Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Submit Application
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default JobApply;
