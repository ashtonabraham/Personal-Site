import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashton Abraham | CS Student & Developer</title>
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.greeting}>Hi, I&apos;m</p>
            <h1 className={styles.name}>Ashton Abraham</h1>
            <p className={styles.tagline}>
              Computer Science student at <span className={styles.highlight}>Fordham University</span>
            </p>
            <p className={styles.description}>
              I build things for the web and love exploring new technologies.
              Currently focused on creating elegant solutions to complex problems.
            </p>

            <div className={styles.cta}>
              <Link href="/projects" className={styles.primaryBtn}>
                View Projects
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                Get in Touch
              </Link>
            </div>
          </div>

          <div className={styles.decoration}>
            <div className={styles.grid}>
              {[...Array(16)].map((_, i) => (
                <div key={i} className={styles.gridItem} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <p>
              I&apos;m a Computer Science major at Fordham University with a passion
              for building software that makes a difference. I enjoy working across
              the full stack, from crafting intuitive user interfaces to designing
              robust backend systems.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source, or working on personal projects that
              challenge me to grow as a developer.
            </p>
            <Link href="/about" className={styles.learnMore}>
              Learn more about me →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What I Work With</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Languages</h3>
              <ul>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>React / Next.js</li>
                <li>HTML / CSS / SCSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>PostgreSQL / MongoDB</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Tools</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
