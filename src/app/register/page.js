import { GoogleButton } from '@/components/GoogleButton';
import { RegisterForm } from '@/components/RegisterForm';
import styles from '../page.module.css';

import Link from 'next/link';

export default async function Register() {
  return (
    <div className={styles.loginPage}>
      <h1>Register</h1>
      <p className={styles.text}>
        Allready have an account? Go to
        <Link href="/signin" className={styles.links}>
          Sign In
        </Link>
      </p>
      <RegisterForm />
      <div className={styles.divider}>OR</div>
      <GoogleButton />
    </div>
  );
}
