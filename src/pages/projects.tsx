import Head from 'next/head';
import ProjectCard, { Project } from '@/components/ProjectCard';
import styles from '@/styles/pages/Projects.module.scss';

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description:
      'A full-stack web application built with React and Node.js. Features user authentication, real-time updates, and a clean, modern interface.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/ashtonabraham/project-one',
    link: '#',
  },
  {
    id: '2',
    title: 'Project Two',
    description:
      'A machine learning project that analyzes data patterns and provides insights. Built with Python and scikit-learn.',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/ashtonabraham/project-two',
  },
  {
    id: '3',
    title: 'Project Three',
    description:
      'A mobile-first progressive web app that helps users track their daily habits and goals with beautiful visualizations.',
    tags: ['Next.js', 'PWA', 'Chart.js', 'SCSS'],
    github: 'https://github.com/ashtonabraham/project-three',
    link: '#',
  },
  {
    id: '4',
    title: 'Project Four',
    description:
      'A CLI tool that automates common development tasks and improves workflow efficiency for developers.',
    tags: ['TypeScript', 'Node.js', 'CLI'],
    github: 'https://github.com/ashtonabraham/project-four',
  },
  {
    id: '5',
    title: 'Project Five',
    description:
      'An API service that provides real-time data processing and integrates with multiple third-party services.',
    tags: ['Express', 'Redis', 'Docker', 'AWS'],
    github: 'https://github.com/ashtonabraham/project-five',
  },
  {
    id: '6',
    title: 'Project Six',
    description:
      'A collaborative note-taking application with real-time sync, markdown support, and team sharing features.',
    tags: ['React', 'Firebase', 'Markdown', 'WebSocket'],
    github: 'https://github.com/ashtonabraham/project-six',
    link: '#',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Ashton Abraham</title>
        <meta
          name="description"
          content="View my portfolio of projects including web applications, machine learning experiments, and developer tools."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            A collection of things I&apos;ve built. From web apps to CLI tools,
            each project represents a learning journey.
          </p>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <p className={styles.ctaText}>
            Want to see more? Check out my GitHub for all my repositories.
          </p>
          <a
            href="https://github.com/ashtonabraham"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            View GitHub Profile
          </a>
        </div>
      </section>
    </>
  );
}
