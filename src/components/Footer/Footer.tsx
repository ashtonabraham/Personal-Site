import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.copyright}>
            © {currentYear} Ashton Abraham
          </span>
        </div>

        <div className={styles.right}>
          <a
            href="https://github.com/ashtonabraham"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ashtonabraham"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href="mailto:ashtonworkmode@gmail.com" className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
