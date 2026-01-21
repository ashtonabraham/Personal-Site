import Head from 'next/head';
import styles from '@/styles/pages/Resume.module.scss';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Ashton Abraham</title>
        <meta
          name="description"
          content="View the resume of Ashton Abraham - Computer Science student at Fordham University."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Resume</h1>
            <a href="/resume.pdf" download className={styles.downloadBtn}>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.name}>Ashton Abraham</h2>
            <div className={styles.contact}>
              <span>New York, NY</span>
              <span>•</span>
              <a href="mailto:ashtonworkmode@gmail.com">ashtonworkmode@gmail.com</a>
              <span>•</span>
              <a
                href="https://github.com/ashtonabraham"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ashtonabraham
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Education</h3>
            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <span className={styles.entryTitle}>Fordham University</span>
                  <span className={styles.entrySubtitle}>
                    Bachelor of Science in Computer Science
                  </span>
                </div>
                <span className={styles.entryDate}>Expected May 2026</span>
              </div>
              <ul className={styles.entryList}>
                <li>Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering</li>
                <li>GPA: 3.X/4.0</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Experience</h3>
            
            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <span className={styles.entryTitle}>Software Engineering Intern</span>
                  <span className={styles.entrySubtitle}>Company Name</span>
                </div>
                <span className={styles.entryDate}>Summer 2025</span>
              </div>
              <ul className={styles.entryList}>
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver features on schedule</li>
                <li>Implemented RESTful APIs and optimized database queries</li>
              </ul>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <span className={styles.entryTitle}>Teaching Assistant</span>
                  <span className={styles.entrySubtitle}>Fordham University CS Department</span>
                </div>
                <span className={styles.entryDate}>Fall 2024 - Present</span>
              </div>
              <ul className={styles.entryList}>
                <li>Assisted students with programming concepts and debugging</li>
                <li>Held weekly office hours and graded assignments</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Projects</h3>
            
            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <span className={styles.entryTitle}>Project Name</span>
                  <span className={styles.entrySubtitle}>
                    React, Node.js, PostgreSQL
                  </span>
                </div>
              </div>
              <ul className={styles.entryList}>
                <li>Built a full-stack web application with user authentication and real-time features</li>
                <li>Deployed using Docker and AWS services</li>
              </ul>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryHeader}>
                <div>
                  <span className={styles.entryTitle}>Another Project</span>
                  <span className={styles.entrySubtitle}>
                    Python, Machine Learning
                  </span>
                </div>
              </div>
              <ul className={styles.entryList}>
                <li>Implemented a machine learning model for data classification</li>
                <li>Achieved X% accuracy on test dataset</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <div className={styles.skills}>
              <div className={styles.skillGroup}>
                <span className={styles.skillLabel}>Languages:</span>
                <span>JavaScript, TypeScript, Python, Java, C++, SQL</span>
              </div>
              <div className={styles.skillGroup}>
                <span className={styles.skillLabel}>Frameworks:</span>
                <span>React, Next.js, Node.js, Express</span>
              </div>
              <div className={styles.skillGroup}>
                <span className={styles.skillLabel}>Tools:</span>
                <span>Git, Docker, AWS, PostgreSQL, MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
