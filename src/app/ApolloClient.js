import { ApolloClient } from 'apollo-client';
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://dcrestini.prismic.io/graphql',
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }),
  cache: new InMemoryCache(),
});

export default client;
