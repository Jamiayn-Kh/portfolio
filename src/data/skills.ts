export interface SkillGroup {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  projects?: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: 'CodeBracketIcon',
    skills: [
      { name: 'TypeScript', projects: ['Smart Zud Risk System', 'AF Shop'] },
      { name: 'JavaScript', projects: ['AF Shop'] },
      { name: 'Java', projects: ['Mungun Urlal'] },
      { name: 'Python', projects: ['Smart Zud Risk System'] },
      { name: 'Kotlin' },
      { name: 'C#' },
      { name: 'C++' },
      { name: 'SQL', projects: ['Smart Zud Risk System', 'Mungun Urlal'] },
    ],
  },
  {
    category: 'Frontend',
    icon: 'WindowIcon',
    skills: [
      { name: 'React', projects: ['Smart Zud Risk System'] },
      { name: 'Next.js', projects: ['Smart Zud Risk System'] },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'Backend',
    icon: 'ServerIcon',
    skills: [
      { name: 'Node.js', projects: ['Smart Zud Risk System', 'AF Shop'] },
      { name: 'NestJS', projects: ['Smart Zud Risk System'] },
      { name: 'Spring Boot', projects: ['Mungun Urlal'] },
      { name: 'REST API', projects: ['Smart Zud Risk System', 'Mungun Urlal', 'AF Shop'] },
      { name: 'Flask', projects: ['Smart Zud Risk System'] },
    ],
  },
  {
    category: 'Databases',
    icon: 'CircleStackIcon',
    skills: [
      { name: 'PostgreSQL', projects: ['Smart Zud Risk System', 'Mungun Urlal'] },
      { name: 'MySQL' },
      { name: 'MongoDB', projects: ['AF Shop'] },
    ],
  },
  {
    category: 'Mobile',
    icon: 'DevicePhoneMobileIcon',
    skills: [
      { name: 'Flutter' },
      { name: 'Kotlin / Android' },
    ],
  },
  {
    category: 'Tools & Development',
    icon: 'WrenchScrewdriverIcon',
    skills: [
      { name: 'Git' },
      { name: 'Postman', projects: ['Enterprise TMS'] },
      { name: 'Swagger', projects: ['Enterprise TMS'] },
      { name: 'Figma' },
      { name: 'AWS' },
      { name: 'Prisma', projects: ['Smart Zud Risk System'] },
      { name: 'Flyway', projects: ['Mungun Urlal'] },
    ],
  },
  {
    category: 'Engineering Areas',
    icon: 'CpuChipIcon',
    skills: [
      { name: 'Backend Logic' },
      { name: 'Database Design' },
      { name: 'REST API Design' },
      { name: 'API Integration' },
      { name: 'Authentication (JWT)' },
      { name: 'System Testing' },
      { name: 'Requirements Analysis' },
      { name: 'UI/UX Implementation' },
    ],
  },
];