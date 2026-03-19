import { Sun, Moon, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('reading');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <div className="theme-icon-container">
        <Sun className={`theme-icon ${theme === 'light' ? 'active' : ''}`} />
        <Moon className={`theme-icon ${theme === 'dark' ? 'active' : ''}`} />
        <BookOpen className={`theme-icon ${theme === 'reading' ? 'active' : ''}`} />
      </div>
    </button>
  );
}
