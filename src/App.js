import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthYear = birthDate.getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      margin: 0, 
      background: 'linear-gradient(135deg, #f4f4f4, #e0e0e0)',
    }}>
      <div style={{ 
        textAlign: 'center', 
        padding: '20px', 
        borderRadius: '8px', 
        backgroundColor: '#fff', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        marginBottom: '20px',
      }}>
        <h1 style={{ color: 'green' }}>TASK 5</h1>
        <h1 style={{ color: 'red' }}>Age Calculator</h1>
        <label style={{ display: 'block', margin: '20px' }}>
          Enter your birthdate:
          <input 
            type="date" 
            value={birthDate.toISOString().split('T')[0]} 
            onChange={(e) => setBirthDate(new Date(e.target.value))} 
            style={{
              border: 'none', 
              borderBottom: '5px solid #4a90e2', // Add a curved border
              padding: '15px',
              fontSize: '16px', 
            }}
          />
        </label>
      </div>
      <button style={{ 
        backgroundColor: 'blue', 
        color: 'white', 
        padding: '10px', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        marginBottom: '20px', 
        border: 'none', 
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)', 
      }} onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== null && <p style={{ color: 'blue' }}>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
