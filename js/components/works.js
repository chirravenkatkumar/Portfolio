export function createWorks() {
  const worksByYear = {
    "2023": [
      {
        client: "Tech Solutions Inc.",
        project: "Payment Processing API",
        description: "Developed a secure payment processing API handling 10k+ transactions daily with 99.9% uptime.",
        technologies: ["Node.js", "Express", "MongoDB", "Redis"],
        duration: "6 months",
        role: "Lead Backend Developer"
      },
      {
        client: "Digital Platforms Co.",
        project: "Authentication Service",
        description: "Built a centralized authentication service supporting OAuth2 and JWT with multi-factor authentication.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
        duration: "4 months",
        role: "Senior Backend Developer"
      }
    ],
    "2022": [
      {
        client: "DataFlow Systems",
        project: "Real-time Analytics Pipeline",
        description: "Built a scalable data processing pipeline for real-time analytics and reporting.",
        technologies: ["Apache Kafka", "Python", "Elasticsearch", "Docker"],
        duration: "8 months",
        role: "System Architect"
      },
      {
        client: "Cloud Services Ltd",
        project: "Microservices Migration",
        description: "Led the migration of monolithic application to microservices architecture.",
        technologies: ["Node.js", "Kubernetes", "MongoDB", "RabbitMQ"],
        duration: "10 months",
        role: "Technical Lead"
      }
    ],
    "2021": [
      {
        client: "Global E-commerce",
        project: "Inventory Management System",
        description: "Created a robust inventory system syncing across multiple warehouses and sales channels.",
        technologies: ["Go", "PostgreSQL", "Redis", "gRPC"],
        duration: "7 months",
        role: "Backend Developer"
      }
    ]
  };

  const workItems = Object.entries(worksByYear).map(([year, works], index) => {
    const delay = index + 1;
    return `
      <div class="work-item animate-on-scroll slide-up delay-${delay}" data-year="${year}">
        <div class="work-year">${year}</div>
        <div class="work-preview">
          <h3 class="work-count">${works.length} Project${works.length > 1 ? 's' : ''}</h3>
          <button class="expand-btn" aria-label="View all ${year} projects">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="work-details" id="work-details-${year}">
        <div class="work-details-content">
          <div class="work-details-header">
            <h2>${year} Projects</h2>
            <button class="close-btn" aria-label="Close details">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="work-details-grid">
            ${works.map(work => `
              <div class="work-detail-card">
                <div class="work-detail-header">
                  <h3 class="work-client">${work.client}</h3>
                  <span class="work-duration">${work.duration}</span>
                </div>
                <h4 class="work-project">${work.project}</h4>
                <p class="work-role">${work.role}</p>
                <p class="work-description">${work.description}</p>
                <div class="work-technologies">
                  ${work.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="works" class="works-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll fade-up">My Works</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-1">
          Client projects I've contributed to
        </p>
        <div class="works-timeline">
          ${workItems}
        </div>
      </div>
    </section>
  `;
}

// Initialize works functionality when file is imported
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const workItems = document.querySelectorAll('.work-item');
    const workDetails = document.querySelectorAll('.work-details');
    
    workItems.forEach(item => {
      const expandBtn = item.querySelector('.expand-btn');
      const year = item.dataset.year;
      const details = document.getElementById(`work-details-${year}`);
      
      expandBtn.addEventListener('click', () => {
        details.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
    
    workDetails.forEach(details => {
      const closeBtn = details.querySelector('.close-btn');
      
      closeBtn.addEventListener('click', () => {
        details.classList.remove('active');
        document.body.style.overflow = '';
      });
      
      details.addEventListener('click', (e) => {
        if (e.target === details) {
          details.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }, 100);
});