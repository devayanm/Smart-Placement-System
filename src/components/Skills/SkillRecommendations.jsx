import React, { useState } from 'react';

const SkillRecommendations = () => {
    const [recommendedSkills, setRecommendedSkills] = useState([
        'TypeScript',
        'GraphQL',
        'Docker',
        'Kubernetes',
    ]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Skill Recommendations</h1>
            <ul>
                {recommendedSkills.map((skill, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillRecommendations;
