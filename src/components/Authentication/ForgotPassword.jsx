import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();
        console.log('Reset password email sent to:', email);
        // Implement forgot password logic here
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPassword}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            <p>
                Remembered your password? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default ForgotPassword;
