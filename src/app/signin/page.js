import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SignInForm';
import Link from 'next/link';
import styles from '../page.module.css';

export default async function SignIn() {
  return (
    <div className={styles.loginPage}>
      <h1>Sign in</h1>
      <p className={styles.text}>
        Do not have an account? Go to
        <Link href="/register" className={styles.links}>
          Register
        </Link>
      </p>
      <SignInForm />
      <div className={styles.divider}>OR</div>
      <GoogleButton />
    </div>
  );
}
