import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/pages/About.module.scss';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Ashton Abraham</title>
        <meta
          name="description"
          content="Learn more about Ashton Abraham - a Computer Science student at Fordham University passionate about building software."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Me</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.main}>
              <div className={styles.section}>
                <h2>Who I Am</h2>
                <p>
                  I&apos;m Ashton Abraham, a Computer Science student at Fordham
                  University. I&apos;m passionate about technology and its potential
                  to solve real-world problems. My journey in programming started
                  with curiosity about how things work, and it has evolved into a
                  deep commitment to creating meaningful software.
                </p>
                <p>
                  I believe in writing clean, maintainable code and building
                  applications that provide genuine value to users. Whether it&apos;s
                  a web application, a mobile app, or a backend service, I approach
                  every project with the same dedication to quality and attention
                  to detail.
                </p>
              </div>

              <div className={styles.section}>
                <h2>What I Do</h2>
                <p>
                  As a full-stack developer, I work across the entire application
                  stack. On the frontend, I create intuitive user interfaces using
                  modern frameworks like React and Next.js. On the backend, I design
                  scalable APIs and work with databases to ensure data integrity and
                  performance.
                </p>
                <p>
                  I&apos;m constantly learning and experimenting with new technologies.
                  Currently, I&apos;m exploring machine learning, cloud computing, and
                  system design to broaden my skill set and tackle more complex
                  challenges.
                </p>
              </div>

              <div className={styles.section}>
                <h2>Beyond Code</h2>
                <p>
                  When I&apos;m not coding, I enjoy exploring new technologies through
                  side projects, contributing to open-source software, and staying
                  up to date with the latest developments in the tech industry.
                  I also believe in the importance of giving back to the community
                  and sharing knowledge with others.
                </p>
              </div>

              <div className={styles.cta}>
                <p>Want to work together or just say hello?</p>
                <Link href="/contact" className={styles.ctaButton}>
                  Get in Touch
                </Link>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarSection}>
                <h3>Education</h3>
                <div className={styles.item}>
                  <span className={styles.itemTitle}>Fordham University</span>
                  <span className={styles.itemDetail}>B.S. Computer Science</span>
                  <span className={styles.itemMeta}>Expected 2026</span>
                </div>
              </div>

              <div className={styles.sidebarSection}>
                <h3>Interests</h3>
                <ul className={styles.list}>
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>Open Source</li>
                  <li>System Design</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>

              <div className={styles.sidebarSection}>
                <h3>Connect</h3>
                <ul className={styles.links}>
                  <li>
                    <a
                      href="https://github.com/ashtonabraham"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/ashtonabraham"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=ashtonworkmode@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
