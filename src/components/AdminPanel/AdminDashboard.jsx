import React from 'react';

const AdminDashboard = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage users, jobs, and settings for the platform.</p>
            <div style={{ marginTop: '20px' }}>
                <h3>Quick Links</h3>
                <ul>
                    <li>Manage Users</li>
                    <li>View Job Listings</li>
                    <li>Platform Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
