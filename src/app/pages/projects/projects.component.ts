import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Developer Performance Insights',
      subtitle: 'Badly AI: Enhancing Developer Productivity',
      description: 'Designed and built a responsive, user-friendly interface for an AI-powered code review and performance insights platform. Implemented data visualisation to present metrics effectively.',
      keyImpact: 'Increased user engagement by 20% and boosted satisfaction by 15% through improved UI/UX.',
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Webpack', 'Git', 'Figma', 'Azure Services', 'Postman']
    },
    {
      title: 'Game Analytics Platform',
      subtitle: 'Telescope Labs: Insights for Game Companies',
      description: 'Developed a responsive front-end with advanced data visualisation for game analytics, helping companies track and optimise player engagement. Contributed to backend data analytics by writing and refining SQL and KQL queries for actionable insights.',
      keyImpact: 'Enhanced user engagement with interactive dashboards and improved functionality with optimised API integrations and delivered valuable analytics to drive data-informed decisions.',
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'KQL', 'Webpack', 'Git', 'Figma', 'Azure Services', 'Postman', 'Google Analytics']
    },
    {
      title: 'Interactive News Features',
      subtitle: 'Microsoft: MSN.com Social Community Tools',
      description: ' Designed and maintained interactive features like commenting, reactions, and social promotion tools for the MSN.com platform. Implemented telemetry systems to track user interactions and conducted data analysis to improve feature performance, accessibility, and functionality.',
      keyImpact: 'Reduced load times by 30%, enhanced WCAG-compliant accessibility, and increased user interaction rates through engaging features and data-driven improvements.',
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'KQL', 'Webpack', 'Git', 'Figma', 'Azure Services', 'Postman', 'Titan']
    },
  ];
}