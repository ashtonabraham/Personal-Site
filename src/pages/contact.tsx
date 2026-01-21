import Head from 'next/head';
import { useState, FormEvent } from 'react';
import styles from '@/styles/pages/Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // For now, just show success - integrate with your preferred backend later
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact | Ashton Abraham</title>
        <meta
          name="description"
          content="Get in touch with Ashton Abraham for collaborations, opportunities, or just to say hello."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.subtitle}>
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.formSection}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className={styles.input}
                    placeholder="your@email.com"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className={styles.textarea}
                    placeholder="What would you like to say?"
                    rows={6}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>

                {status === 'success' && (
                  <p className={styles.success}>
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            <div className={styles.info}>
              <div className={styles.infoSection}>
                <h3>Email</h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ashtonworkmode@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  ashtonworkmode@gmail.com
                </a>
              </div>

              <div className={styles.infoSection}>
                <h3>Social</h3>
                <ul className={styles.socialLinks}>
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
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3>Location</h3>
                <p className={styles.location}>New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
