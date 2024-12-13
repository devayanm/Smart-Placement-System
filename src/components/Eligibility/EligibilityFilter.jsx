import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';

const EligibilityFilter = () => {
    const navigate = useNavigate();
    const [criteria, setCriteria] = useState({
        cgpa: '',
        skills: '',
        location: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false); // For loading state

    const handleChange = (e) => {
        setCriteria({ ...criteria, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!criteria.cgpa || !criteria.skills || !criteria.location) {
            setError('All fields are required.');
            setSuccess(false);
            return false;
        }

        if (criteria.cgpa < 0 || criteria.cgpa > 10) {
            setError('CGPA must be between 0 and 10.');
            setSuccess(false);
            return false;
        }

        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true);
            setError('');
            setSuccess(true);
            setTimeout(() => {
                setLoading(false);
                navigate('/eligibility/results', { state: { criteria } });
            }, 1500); // Simulate a slight delay
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6} lg={5}>
                    <Card className="shadow-lg border-0 rounded-3">
                        <Card.Body>
                            <h2 className="text-center mb-4">Eligibility Filter</h2>

                            {/* Error and Success Alerts */}
                            {error && (
                                <Alert variant="danger">
                                    {error}
                                </Alert>
                            )}

                            {success && !loading && (
                                <Alert variant="success">
                                    Filters applied successfully! Redirecting to results...
                                </Alert>
                            )}

                            {loading && (
                                <div className="d-flex justify-content-center">
                                    <Spinner animation="border" variant="primary" />
                                </div>
                            )}

                            {/* Form */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="cgpa" className="mb-3">
                                    <Form.Label>Minimum CGPA</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="cgpa"
                                        value={criteria.cgpa}
                                        onChange={handleChange}
                                        placeholder="Enter minimum CGPA (0-10)"
                                        min="0"
                                        max="10"
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        Enter CGPA between 0 and 10.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="skills" className="mb-3">
                                    <Form.Label>Skills</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="skills"
                                        value={criteria.skills}
                                        onChange={handleChange}
                                        placeholder="Enter skills (comma-separated)"
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        Example: Java, React, Node.js
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="location" className="mb-4">
                                    <Form.Label>Preferred Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        value={criteria.location}
                                        onChange={handleChange}
                                        placeholder="Enter preferred location"
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100"
                                    size="lg"
                                    disabled={loading} // Disable button during loading
                                >
                                    {loading ? 'Applying Filter...' : 'Apply Filter'}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EligibilityFilter;
