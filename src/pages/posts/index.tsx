import Head from 'next/head';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from 'next';

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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  );

  return {
    props: {},
  };
};
