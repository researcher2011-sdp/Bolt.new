import { ThemeProvider } from './contexts/ThemeContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeToggle } from './components/ThemeToggle';
import { TableOfContents } from './components/TableOfContents';
import { Article } from './components/Article';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <AnimatedBackground />
        <ThemeToggle />
        <TableOfContents />
        <main className="main-content">
          <Article />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
