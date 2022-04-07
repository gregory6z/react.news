import Head from 'next/head';
import styles from './styles.module.scss';

export default function Post() {
  return (
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de marcp de 2021</time>
            <strong>
              Creating a monorepo with Lerna e yarn workpaces
            </strong>
            <p>
              In this guide you will learn how to create a monorepo to
              manage multiple packages with a shared but import u
            </p>
          </a>
          <a href="#">
            <time>12 de marcp de 2021</time>
            <strong>
              Creating a monorepo with Lerna e yarn workpaces
            </strong>
            <p>
              In this guide you will learn how to create a monorepo to
              manage multiple packages with a shared but import u
            </p>
          </a>
          <a href="#">
            <time>12 de marcp de 2021</time>
            <strong>
              Creating a monorepo with Lerna e yarn workpaces
            </strong>
            <p>
              In this guide you will learn how to create a monorepo to
              manage multiple packages with a shared but import u
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
