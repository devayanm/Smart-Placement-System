import React, { useState } from 'react';

const SkillManager = () => {
    const [skills, setSkills] = useState(['React', 'Node.js', 'CSS']);
    const [newSkill, setNewSkill] = useState('');

    const addSkill = () => {
        if (newSkill.trim()) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Skill Manager</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    style={{ padding: '10px', marginRight: '10px' }}
                />
                <button onClick={addSkill} style={{ padding: '10px' }}>Add Skill</button>
            </div>
            <ul style={{ marginTop: '20px' }}>
                {skills.map((skill, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {skill} <button onClick={() => removeSkill(index)} style={{ padding: '5px' }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillManager;
