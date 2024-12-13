import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button, Card, Row, Col, Badge, Form, InputGroup, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaEye, FaRegCheckCircle, FaRegTimesCircle, FaRegClock, FaSearch, FaTimes } from 'react-icons/fa';

const ApplicationsList = () => {
    const navigate = useNavigate();

    // Sample data for applications
    const [applications] = useState([
        { id: 1, jobTitle: 'Software Engineer', companyName: 'TechCorp', status: 'Pending', appliedOn: '2024-12-01', location: 'New York, USA', jobType: 'Full-time' },
        { id: 2, jobTitle: 'Data Analyst', companyName: 'DataCorp', status: 'Accepted', appliedOn: '2024-11-15', location: 'San Francisco, USA', jobType: 'Part-time' },
        { id: 3, jobTitle: 'Web Developer', companyName: 'WebWorks', status: 'Rejected', appliedOn: '2024-10-20', location: 'London, UK', jobType: 'Full-time' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [selectedAppId, setSelectedAppId] = useState(null);

    const handleViewDetails = (id) => {
        navigate(`/applications/${id}`); // Navigate to ApplicationDetails
    };

    const handleWithdrawApplication = (id) => {
        setSelectedAppId(id);
        setShowModal(true); // Show confirmation modal
    };

    const handleConfirmWithdraw = () => {
        alert(`Application with ID ${selectedAppId} has been withdrawn.`);
        setShowModal(false); // Close modal after withdrawal
    };

    const handleCancelWithdraw = () => {
        setShowModal(false); // Close modal without action
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    };

    const renderStatusBadge = (status) => {
        switch (status) {
            case 'Accepted':
                return <Badge bg="success"><FaRegCheckCircle className="me-1" />Accepted</Badge>;
            case 'Pending':
                return <Badge bg="warning"><FaRegClock className="me-1" />Pending</Badge>;
            case 'Rejected':
                return <Badge bg="danger"><FaRegTimesCircle className="me-1" />Rejected</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    // Filter and search logic
    const filteredApplications = applications.filter((app) => {
        const matchesSearchTerm =
            app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.companyName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
        return matchesSearchTerm && matchesStatus;
    });

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card className="shadow-lg border-0 rounded-3">
                        <Card.Body>
                            <h3 className="text-center mb-4">My Job Applications</h3>

                            {/* Search and Filter */}
                            <Row className="mb-3">
                                <Col md={6}>
                                    <InputGroup>
                                        <InputGroup.Text><FaSearch /></InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Search by job title or company"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        {searchTerm && (
                                            <Button variant="link" onClick={() => setSearchTerm('')} className="text-danger">
                                                <FaTimes />
                                            </Button>
                                        )}
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <Form.Select
                                        value={statusFilter}
                                        onChange={handleStatusChange}
                                        aria-label="Filter by status"
                                    >
                                        <option value="All">All Statuses</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Rejected">Rejected</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            {/* Table */}
                            <Table striped bordered hover responsive className="table-custom">
                                <thead>
                                    <tr>
                                        <th>Job Title</th>
                                        <th>Company Name</th>
                                        <th>Location</th>
                                        <th>Job Type</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredApplications.map((app) => (
                                        <tr key={app.id} className="hover-effect">
                                            <td>{app.jobTitle}</td>
                                            <td>{app.companyName}</td>
                                            <td>{app.location}</td>
                                            <td>{app.jobType}</td>
                                            <td>{renderStatusBadge(app.status)}</td>
                                            <td>
                                                <Button
                                                    variant="primary"
                                                    onClick={() => handleViewDetails(app.id)}
                                                    className="d-flex align-items-center me-2"
                                                >
                                                    <FaEye className="me-2" />
                                                    View Details
                                                </Button>
                                                {app.status !== 'Accepted' && (
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip>Withdraw Application</Tooltip>}
                                                    >
                                                        <Button
                                                            variant="danger"
                                                            onClick={() => handleWithdrawApplication(app.id)}
                                                        >
                                                            Withdraw
                                                        </Button>
                                                    </OverlayTrigger>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal for confirming withdrawal */}
            <Modal show={showModal} onHide={handleCancelWithdraw}>
                <Modal.Header closeButton>
                    <Modal.Title>Withdraw Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to withdraw this application?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelWithdraw}>Cancel</Button>
                    <Button variant="danger" onClick={handleConfirmWithdraw}>Withdraw</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ApplicationsList;
