'use client';

// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import React from 'react';
import styles from '../app/page.module.css';

const RegisterForm = () => {
  // const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // const res = await signIn('credentials', {
    //   email: formData.get('email'),
    //   password: formData.get('password'),
    //   redirect: false,
    // });

    // if (res && !res.error) {
    //   console.log('res+ :>> ', res);
    //   router.push('/');
    // } else {
    //   console.log('res- :>> ', res);
    // }

    const user = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    console.log('user :>> ', user);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <input
        type="text"
        name="name"
        placeholder="username"
        required
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="example@mail.com"
        required
        className={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.loginButton}>
        Register
      </button>
    </form>
  );
};

export { RegisterForm };
