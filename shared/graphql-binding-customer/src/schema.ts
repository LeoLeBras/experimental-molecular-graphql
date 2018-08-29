import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'
import { Types } from '@acme/graphql-types'
import resolvers from './resolvers'

export const typeDefs = importSchema(`
  ${Types}
  # import Query.* from "${__dirname}/queries.graphql"
`)

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
