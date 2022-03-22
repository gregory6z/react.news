/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import {
  signIn, useSession, signOut,
} from 'next-auth/react';
import styles from './styles.module.scss';

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      className={styles.signInButton}
      type="button"
      onClick={
      () => signOut()
}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Connecter avec GitHub
    </button>
  );
}
