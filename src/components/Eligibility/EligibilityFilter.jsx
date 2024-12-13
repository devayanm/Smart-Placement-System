import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EligibilityFilter = () => {
    const navigate = useNavigate();

    const [criteria, setCriteria] = useState({
        cgpa: '',
        skills: '',
        location: '',
    });

    const handleChange = (e) => {
        setCriteria({ ...criteria, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/eligibility/results', { state: { criteria } }); // Pass criteria to results page
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Eligibility Filter</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label>
                    <strong>Minimum CGPA:</strong>
                </label>
                <input
                    type="number"
                    name="cgpa"
                    value={criteria.cgpa}
                    onChange={handleChange}
                    placeholder="Enter minimum CGPA"
                    style={{ marginBottom: '10px' }}
                />
                <label>
                    <strong>Skills:</strong>
                </label>
                <input
                    type="text"
                    name="skills"
                    value={criteria.skills}
                    onChange={handleChange}
                    placeholder="Enter skills (comma-separated)"
                    style={{ marginBottom: '10px' }}
                />
                <label>
                    <strong>Preferred Location:</strong>
                </label>
                <input
                    type="text"
                    name="location"
                    value={criteria.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    style={{ marginBottom: '10px' }}
                />
                <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
                    Apply Filter
                </button>
            </form>
        </div>
    );
};

export default EligibilityFilter;
