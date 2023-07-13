'use client';

import Link from 'next/link';
import styles from '../app/page.module.css';
import { signOut, useSession } from 'next-auth/react';

export const User = () => {
  const session = useSession();
  console.log('session :>> ', session);

  return (
    <div>
      {session?.data && (
        <Link href="/profile" className={styles.links}>
          Profile
        </Link>
      )}

      {session?.data ? (
        <Link
          href="/"
          className={styles.links}
          onClick={() => {
            signOut({ callbackUrl: '/' });
          }}>
          Sign Out
        </Link>
      ) : (
        <Link href="signin" className={styles.links}>
          Sign In
        </Link>
      )}
    </div>
  );
};
