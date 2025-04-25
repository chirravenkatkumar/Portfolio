export function createSkills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "Go", "SQL", "TypeScript"]
    },
    {
      category: "Frameworks",
      skills: ["Node.js", "Express", "Django", "Flask", "FastAPI"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"]
    },
    {
      category: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"]
    }
  ];

  const skillSections = skillCategories.map((category, index) => {
    const delay = index + 1;
    return `
      <div class="skill-category animate-on-scroll fade-up delay-${delay}">
        <h3 class="category-title">${category.category}</h3>
        <div class="skills-container">
          ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="skills" class="skills-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll fade-up">Skills</h2>
        <p class="section-subtitle animate-on-scroll fade-up delay-1">
          Technologies and tools I work with
        </p>
        <div class="skills-grid">
          ${skillSections}
        </div>
      </div>
    </section>
  `;
}