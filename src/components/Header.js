import Link from 'next/link';
import styles from '../app/page.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <Link href="/" className={styles.links}>
          Home
        </Link>
        <Link href="/about" className={styles.links}>
          About
        </Link>
      </div>
      <Link href="/profile" className={styles.links}>
        Profile
      </Link>
    </header>
  );
};

export { Header };
