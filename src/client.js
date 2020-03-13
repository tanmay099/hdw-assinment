import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'
import App from './App';


const link =  new HttpLink({'uri': 'https://api.devcdc.com/cricket'});
const cache = new InMemoryCache()

const client = new ApolloClient({
    link,
    cache
})


export default client;