import React from 'react';
import { useDifficulty } from '../DifficultySwitcher';

function ContentRenderer({ children }) {
  const { difficulty } = useDifficulty();

  const renderContentByDifficulty = () => {
    switch (difficulty) {
      case 'beginner':
        return <p>This is content for **Beginner** readers.</p>;
      case 'intermediate':
        return <p>This is content for **Intermediate** readers, with more detail.</p>;
      case 'advanced':
        return <p>This is content for **Advanced** readers, including complex topics.</p>;
      default:
        return <p>Select a difficulty to see personalized content.</p>;
    }
  };

  return (
    <div>
      <h3>Current Difficulty: {difficulty}</h3>
      {renderContentByDifficulty()}
      {children} {/* Renders any child content passed to this component */}
    </div>
  );
}

export default ContentRenderer;
