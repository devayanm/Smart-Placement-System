import React, { useState } from 'react';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [theme, setTheme] = useState('light');

    const handleNotificationsToggle = () => setNotifications(!notifications);
    const handleThemeChange = (event) => setTheme(event.target.value);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Settings</h1>
            <div style={{ marginTop: '20px' }}>
                <h3>Notification Settings</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={handleNotificationsToggle}
                    />
                    Enable Notifications
                </label>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Theme Settings</h3>
                <select value={theme} onChange={handleThemeChange}>
                    <option value="light">Light Theme</option>
                    <option value="dark">Dark Theme</option>
                </select>
            </div>
        </div>
    );
};

export default Settings;
