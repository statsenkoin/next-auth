'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from '../app/page.module.css';
import axios from 'axios';

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const user = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    console.log('user :>> ', user);

    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user);
      console.log('Signup success', response.data);
      router.push('/signin');
    } catch (error) {
      console.log('Signup failed', error.message);
      console.log('Signup failed: ', error.response.data.error);
      window.alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
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
        {loading ? 'Processing...' : 'Register'}
      </button>
    </form>
  );
};

export { RegisterForm };
