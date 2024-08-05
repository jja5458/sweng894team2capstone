import React, { useState } from 'react';
import axios from 'axios';

function ResumeComponent({ resumeId, initialNotes, initialTags }) {
  const [notes, setNotes] = useState(initialNotes);
  const [tags, setTags] = useState(initialTags.join(', '));
  const [newTags, setNewTags] = useState('');

  const handleAddNotesTags = async () => {
    try {
      const response = await axios.post('/add-notes-tags', {
        resume_id: resumeId,
        notes: notes,
        tags: newTags.split(',')
      });
      alert('Notes and tags added successfully!');
      setTags(newTags);
    } catch (error) {
      alert('Failed to add notes or tags');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Resume Details</h1>
      <textarea
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder="Add notes here"
      />
      <input
        type="text"
        value={newTags}
        onChange={e => setNewTags(e.target.value)}
        placeholder="Add tags separated by commas"
      />
      <button onClick={handleAddNotesTags}>Add Notes & Tags</button>
      <div>
        <p>Current Tags: {tags}</p>
      </div>
    </div>
  );
}

export default ResumeComponent;
