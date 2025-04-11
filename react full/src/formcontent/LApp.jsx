
import React, { createContext, useContext, useState } from 'react';
import Qrcode from '../components/Qrcode/Qrcode'

// 1. Create Context
const ThemeContext = createContext();

// 2. Theme Toggle Button (uses useContext)
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume context

  return (
    <button onClick={toggleTheme} style={{ marginTop: '10px' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

// 3. Content Area (uses useContext)
const Content = () => {
  const { theme } = useContext(ThemeContext); // Consume context

  const styles = {
    background: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      <h2>{theme === 'light' ? 'Light Mode' : 'Dark Mode'} is On</h2>
      <ThemeToggle />
      <Qrcode/>
    </div>
  );
};

// 4. Main App with Theme Provider
const LApp = () => {
  const [theme, setTheme] = useState('light');

  // Context value
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const themeData = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      <Content />
    </ThemeContext.Provider>
  );
};

export default LApp;
