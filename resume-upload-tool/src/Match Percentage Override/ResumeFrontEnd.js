import React, { useState } from 'react';
import axios from 'axios';

function ResumeComponent({ resumeId, initialMatchPercentage }) {
  const [matchPercentage, setMatchPercentage] = useState(initialMatchPercentage);
  const [inputPercentage, setInputPercentage] = useState(initialMatchPercentage);

  const handleOverride = async () => {
    try {
      const response = await axios.post('/update-match-percentage', {
        resume_id: resumeId,
        new_percentage: inputPercentage
      });
      alert('Match percentage updated successfully!');
      setMatchPercentage(inputPercentage);
    } catch (error) {
      alert('Failed to update match percentage');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Resume Match Percentage</h1>
      <p>System-generated Match Percentage: {matchPercentage}%</p>
      <input
        type="number"
        value={inputPercentage}
        onChange={e => setInputPercentage(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleOverride}>Override Match Percentage</button>
    </div>
  );
}

export default ResumeComponent;
