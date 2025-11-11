// PortfolioView.jsx
import React from 'react';
import usePortfolioController from '../Controller/usePortfolioController';
import { portfolioData } from '../Model/portfolioModel';
import './PortfolioView.css';

/* COMPONENTES SIMPLES (Header, Hero, About, Projects, Contact, Footer) */

const Header = ({ active, onNavigate }) => (
  <header className="header">
    <div className="container header-container">
      <div className="logo">JS</div>
      <nav className="nav">
        {['home', 'sobre', 'projetos', 'contato'].map(section => (
          <button
            key={section}
            className={`nav-button ${active === section ? 'active' : ''}`}
            onClick={() => onNavigate(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

const Hero = ({ data }) => (
  <section className="hero">
    <div className="container hero-container">
      <img className="hero-image" src={data.image} alt={data.name} />
      <div className="hero-text">
        <h1 className="hero-title">{data.name}</h1>
        <h2 className="hero-subtitle">{data.title}</h2>
        <p className="hero-description">{data.description}</p>
      </div>
    </div>
  </section>
);

const About = ({ data }) => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">Sobre Mim</h2>
      <p className="about-text">{data.text}</p>
      <div className="skills-grid">
        {data.skills.map((s, i) => (
          <div key={i} className="skill-card">{s}</div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, onClick }) => (
  <article className="project-card" onClick={() => onClick(project)}>
    <img className="project-image" src={project.image} alt={project.title} />
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.technologies.map((t, idx) => (
          <span key={idx} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  </article>
);

const Projects = ({ projects, selectedProject, onProjectClick, onBack }) => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">Projetos</h2>
      {selectedProject ? (
        <div className="project-detail">
          <button className="back-button" onClick={onBack}>← Voltar</button>
          <img className="project-detail-image" src={selectedProject.image} alt={selectedProject.title} />
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <div className="tech-stack">
            {selectedProject.technologies.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
          </div>
          <div style={{ marginTop: '1rem' }}>
            {selectedProject.githubLink && <a href={selectedProject.githubLink} target="_blank" rel="noreferrer">GitHub</a>}
            {selectedProject.liveLink && <span style={{ marginLeft: '1rem' }}><a href={selectedProject.liveLink} target="_blank" rel="noreferrer">Ver Demo</a></span>}
          </div>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} onClick={onProjectClick} />)}
        </div>
      )}
    </div>
  </section>
);

const Contact = ({ contactInfo, formData, onChange, onSubmit, submitted, submitting }) => (
  <section className="section">
    <div className="container contact-grid">
      <div className="contact-info">
        <h2 className="section-title">Contato</h2>
        <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p>LinkedIn: <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noreferrer">{contactInfo.linkedin}</a></p>
        <p>GitHub: <a href={`https://${contactInfo.github}`} target="_blank" rel="noreferrer">{contactInfo.github}</a></p>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <input name="name" placeholder="Seu nome" value={formData.name} onChange={onChange} />
        <input name="email" type="email" placeholder="Seu email" value={formData.email} onChange={onChange} />
        <textarea name="message" placeholder="Sua mensagem" value={formData.message} onChange={onChange} />
        <button type="submit" className="submit-button" disabled={submitting}>
          {submitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        {submitted && <p className="success-message">Mensagem enviada com sucesso! ✓</p>}
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>© {new Date().getFullYear()} Douglas de Jesus. Todos os direitos reservados.</p>
    </div>
  </footer>
);

/* APLICAÇÃO PRINCIPAL */
export default function Portfolio() {
  const { state, actions } = usePortfolioController();
  const {
    activeSection,
    filteredProjects,
    selectedProject,
    contactForm,
    formSubmitted,
    isFormSubmitting
  } = state;

  const {
    navigateToSection,
    openProjectDetails,
    closeProjectDetails,
    updateContactFormField,
    handleContactSubmit
  } = actions;

  return (
    <div className="app">
      <Header active={activeSection} onNavigate={navigateToSection} />

      <main>
        {activeSection === 'home' && <Hero data={portfolioData.hero} />}
        {activeSection === 'sobre' && <About data={portfolioData.about} />}
        {activeSection === 'projetos' && (
          <Projects
            projects={filteredProjects}
            selectedProject={selectedProject}
            onProjectClick={openProjectDetails}
            onBack={closeProjectDetails}
          />
        )}
        {activeSection === 'contato' && (
          <Contact
            contactInfo={portfolioData.contact}
            formData={contactForm}
            onChange={updateContactFormField}
            onSubmit={handleContactSubmit}
            submitted={formSubmitted}
            submitting={isFormSubmitting}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
