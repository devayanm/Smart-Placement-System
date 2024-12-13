import React from 'react';
import { useLocation } from 'react-router-dom';

const EligibilityResults = () => {
    const location = useLocation();
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

    return (
        <div style={{ padding: '20px' }}>
            <h1>Eligibility Results</h1>
            {filteredJobs.length > 0 ? (
                <ul>
                    {filteredJobs.map((job) => (
                        <li key={job.id} style={{ marginBottom: '10px' }}>
                            <strong>{job.title}</strong> at {job.company} - Location: {job.location}
                            <p>Required CGPA: {job.cgpa}</p>
                            <p>Skills: {job.skills.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs match your criteria.</p>
            )}
        </div>
    );
};

export default EligibilityResults;
