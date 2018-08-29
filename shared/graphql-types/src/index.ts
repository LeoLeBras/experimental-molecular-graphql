import { importSchema } from 'graphql-import'

export const Types = importSchema(`${__dirname}/types.graphql`)
