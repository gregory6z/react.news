/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import styles from './home.module.scss';
import { SubscribeButton } from './components/SubscribeButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news | Page d'accueil</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            👏 Bonjour, bienvenue
          </span>
          <h1>
            Nouveautés sur
            {' '}
            <br />
            le
            {' '}
            <span>React</span>
            {' '}
            world
          </h1>
          <p>
            Accéder à toutes les publications
            {' '}
            <br />

            <span>pour 9,90€ par mois</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />

      </main>
    </>
  );
}
