import { useTheme } from '../contexts/ThemeContext';

export function AnimatedBackground() {
  const { theme } = useTheme();

  return (
    <div className={`animated-background ${theme}`}>
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
      <div className="gradient-blob blob-4"></div>
    </div>
  );
}
