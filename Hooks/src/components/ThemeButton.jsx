import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ThemedButton;
