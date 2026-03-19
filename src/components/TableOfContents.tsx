import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

const sections: TOCItem[] = [
  { id: 'abstract', title: 'Abstract' },
  { id: 'introduction', title: 'Introduction' },
  { id: 'structure', title: 'Structure of the CNS' },
  { id: 'brain', title: 'The Brain' },
  { id: 'spinal-cord', title: 'Spinal Cord' },
  { id: 'neurons', title: 'Neurons and Neurotransmitters' },
  { id: 'functions', title: 'Key Functions' },
  { id: 'disorders', title: 'Common Disorders' },
  { id: 'conclusion', title: 'Conclusion' },
  { id: 'references', title: 'References' },
];

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState('abstract');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <button
        className="toc-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle table of contents"
      >
        <ChevronRight className={`toc-toggle-icon ${isOpen ? 'open' : ''}`} />
      </button>

      <nav className={`table-of-contents ${isOpen ? 'open' : ''}`}>
        <h2 className="toc-title">Contents</h2>
        <ul className="toc-list">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
