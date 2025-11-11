export class Experience {
  constructor(id, company, role, period, description, achievements = []) {
    this.id = id;
    this.company = company;
    this.role = role;
    this.period = period;
    this.description = description;
    this.achievements = achievements;
  }
}

export class Skill {
  constructor(id, name, category, proficiency, icon = '') {
    this.id = id;
    this.name = name;
    this.category = category;
    this.proficiency = proficiency;
    this.icon = icon;
  }
}

export class Project {
  constructor(id, title, description, technologies = [], image = '', githubLink = '', liveLink = '', category = 'Web Application', featured = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.technologies = technologies;
    this.image = image;
    this.githubLink = githubLink;
    this.liveLink = liveLink;
    this.category = category;
    this.featured = featured;
  }
}

export class Testimonial {
  constructor(id, name, role, company, message, avatar = '') {
    this.id = id;
    this.name = name;
    this.role = role;
    this.company = company;
    this.message = message;
    this.avatar = avatar;
  }
}

export const portfolioData = {
  hero: {
    name: "Douglas de Jesus",
    title: "Engenheiro de Software Full Stack",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    description: "Desenvolvedor apaixonado por criar soluções inovadoras e escaláveis — foco em UX e código limpo."
  },
  about: {
    text: "Sou engenheiro de software com experiência em aplicações web modernas, boas práticas e entrega contínua.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"]
  },
  contact: {
    email: "ens-douglasjesus@ugv.edu.br",
    linkedin: "linkedin.com/in/douglasjesus",
    github: "github.com/douglasjesus"
  },
  projects: [
    new Project(
      1,
      "E-Commerce Platform",
      "Plataforma completa de e-commerce com pagamentos e dashboard administrativo.",
      ["React", "Node.js", "MongoDB", "Stripe"],
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      "https://github.com/DouglasJesuss",
      "https://ecommerce-demo.com",
      "Web Application",
      true
    ),
    new Project(
      2,
      "Task Management System",
      "Sistema de gerenciamento de tarefas com colaboração em tempo real.",
      ["React", "Firebase"],
      "https://images.unsplash.com/photo-1484479537959-4f0b6f7f7b08?w=800&h=500&fit=crop",
      "https://github.com/DouglasJesuss",
      "https://tasks-demo.com",
      "Productivity",
      true
    ),
    new Project(
      3,
      "Weather Dashboard",
      "Dashboard de previsão do tempo com mapas e gráficos interativos.",
      ["React", "D3.js", "OpenWeather API"],
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      "https://github.com/DouglasJesuss",
      "https://weather-demo.com",
      "Data Visualization",
      false
    )
  ],
  experiences: [
    new Experience(1, "Tech Solutions Inc.", "Desenvolvedor Full Stack Sênior", "2021 - Presente", "Liderança técnica em projetos com React e Node.", ["Reduziu tempo de carregamento em 60%"]),
    new Experience(2, "StartUp Innovation", "Desenvolvedor Front-End", "2019 - 2021", "Desenvolvimento de interfaces modernas.", ["Criou design system"])
  ],
  testimonials: [
    new Testimonial(1, "Maria Silva", "Product Manager", "Tech Solutions Inc.", "Douglas entrega soluções de alta qualidade."),
    new Testimonial(2, "João Santos", "CTO", "StartUp Innovation", "Trabalhar com Douglas foi excelente.")
  ],
  statistics: {
    yearsExperience: 5,
    projectsCompleted: 47,
    happyClients: 32,
    codeCommits: 3254
  }
};
