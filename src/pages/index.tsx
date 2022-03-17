/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>ola</h1>
      <Head>
        <title>ig.news | Page d'accueil</title>
      </Head>

    </>
  );
}
