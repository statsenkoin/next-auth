'use client';

import Image from 'next/image';
import styles from '../page.module.css';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
// import { getServerSession } from 'next-auth';
// import { authConfig } from '@/configs/auth';

export default function Profile() {
  const session = useSession();
  // const session = await getServerSession(authConfig);
  console.log('session :>> ', session);
  return (
    <>
      <h1>Profile page</h1>
      <div
        style={{
          display: 'flex',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          src={session?.data?.user?.image}
          width={200}
          height={200}
          alt="Picture of the author"
          priority={true}
          style={{ borderRadius: '10%' }}
        />
        <div style={{ fontSize: 22, fontWeight: 600 }}>
          <p>User name: {session?.data?.user?.name}</p>
          <p>User email: {session?.data?.user?.email}</p>
        </div>
      </div>
      <Link href="/" className={styles.links}>
        Go back
      </Link>
    </>
  );
}
