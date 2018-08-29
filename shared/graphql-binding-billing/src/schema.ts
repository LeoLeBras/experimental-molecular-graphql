import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'
import { Types } from '@acme/graphql-types'
import resolvers from './resolvers'

export const typeDefs = importSchema(`
  ${Types}
  # import Query from "${__dirname}/queries.graphql"
  # import Mutation from "${__dirname}/mutations.graphql"
  # import Input from "${__dirname}/inputs.graphql"
`)

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
