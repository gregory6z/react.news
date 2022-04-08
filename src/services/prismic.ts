import Prismic from '@prismicio/client';

const getPrismicClient = (req?: unknown) => {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT_URL, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
};

export { getPrismicClient };
