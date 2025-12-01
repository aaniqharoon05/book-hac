import React, { createContext, useContext, useState } from 'react';

const DifficultyContext = createContext();

export const useDifficulty = () => useContext(DifficultyContext);

function DifficultySwitcher() {
  const [difficulty, setDifficulty] = useState('beginner'); // Default difficulty

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <select value={difficulty} onChange={handleChange}>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
  );
}

export default function DifficultyProvider({ children }) {
  const [difficulty, setDifficulty] = useState('beginner');

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
}