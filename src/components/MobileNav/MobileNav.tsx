import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MobileNav.module.scss';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const router = useRouter();

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className={styles.links}>
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={styles.linkItem}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <Link
                href={item.href}
                className={`${styles.link} ${
                  router.pathname === item.href ? styles.active : ''
                }`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <a
            href="https://github.com/ashtonabraham"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            GitHub
          </a>
        </div>
      </nav>
    </>
  );
}
