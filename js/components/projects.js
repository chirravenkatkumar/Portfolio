export function createProjects() {
  const projects = [
    {
      title: "E-commerce API",
      description: "RESTful API for an e-commerce platform with authentication, product management, and order processing.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "#"
    },
    {
      title: "Real-time Chat Service",
      description: "Scalable websocket-based chat service with message persistence and read receipts.",
      tech: ["Socket.io", "Redis", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Backend for a project management tool with task assignment, deadline tracking, and notifications.",
      tech: ["Python", "Django", "Celery", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Content Delivery API",
      description: "High-performance API for delivering content with caching and CDN integration.",
      tech: ["Go", "Redis", "AWS S3", "CloudFront"],
      link: "#"
    }
  ];

  const projectCards = projects.map((project, index) => {
    const delay = index + 1;
    return `
      <div class="project-card animate-on-scroll slide-up delay-${delay}">
        <div class="card-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.link}" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="projects" class="projects-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll fade-up">Projects</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-1">
          Some of my notable backend projects
        </p>
        <div class="projects-grid">
          ${projectCards}
        </div>
      </div>
    </section>
  `;
}