import { useState } from 'react';
import { portfolioData as initialData } from '../Model/portfolioModel';

const usePortfolioController = () => {
  // seção ativa
  const [activeSection, setActiveSection] = useState('home');

  // projetos e filtros
  const [projects, setProjects] = useState(initialData.projects);
  const [filteredProjects, setFilteredProjects] = useState(initialData.projects);
  const [filterCategory, setFilterCategory] = useState('all');

  // seleção de projeto (detalhes)
  const [selectedProject, setSelectedProject] = useState(null);

  // formulário de contato
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  // navegação entre seções
  const navigateToSection = (section) => {
    setActiveSection(section);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // filtrar projetos por categoria
  const filterProjects = (category) => {
    setFilterCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  // abrir/fechar detalhes do projeto
  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  // manipular formulário de contato
  const updateContactFormField = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!validateEmail(contactForm.email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    setIsFormSubmitting(true);
    // simula envio
    setTimeout(() => {
      setIsFormSubmitting(false);
      setFormSubmitted(true);
      // limpa formulário depois de 2s
      setTimeout(() => {
        setContactForm({ name: '', email: '', message: '' });
        setFormSubmitted(false);
      }, 2000);
    }, 1200);
  };

  return {
    state: {
      activeSection,
      projects,
      filteredProjects,
      filterCategory,
      selectedProject,
      contactForm,
      formSubmitted,
      isFormSubmitting
    },
    actions: {
      navigateToSection,
      filterProjects,
      openProjectDetails,
      closeProjectDetails,
      updateContactFormField,
      handleContactSubmit
    }
  };
};

export default usePortfolioController;
