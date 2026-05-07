import Head from 'next/head';
import ProjectCard, { Project } from '@/components/ProjectCard';
import styles from '@/styles/pages/Projects.module.scss';

const projects: Project[] = [
  {
    id: '1',
    title: 'Crypto Price Tracker',
    description:
      'A real-time cryptocurrency tracker featuring live prices, candlestick charts, and smart caching that minimizes API calls while keeping data fresh. Supports Bitcoin, Ethereum, and Solana.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CoinGecko API'],
    github: 'https://github.com/ashtonabraham/crypto-tracker',
    link: 'https://crypto-tracker-wheat-nu.vercel.app/',
  },
  {
    id: '2',
    title: 'Daily Focus',
    description:
      'A minimal productivity app to help you get work done. Pick up to 3 tasks, focus with a timer (15/25/45 min), and wrap up your day to build a streak.',
    tags: ['JavaScript', 'CSS', 'Vite'],
    github: 'https://github.com/ashtonabraham/productivity-app',
    link: 'https://productivity-app-pied.vercel.app/',
  },
  {
    id: '3',
    title: 'Rate My Roommate',
    description:
      'A social web app built in Rust where users can create profiles and leave public roommate reviews.',
    tags: ['Rust', 'Web App', 'Railway'],
    link: 'https://rate-my-roommate-production.up.railway.app/signup',
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
