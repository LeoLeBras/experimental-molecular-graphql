import { makeRemoteExecutableSchema } from 'graphql-tools'
import { Binding } from './binding'
import schema from './schema'

class CustomerBinding extends Binding {
  constructor(link) {
    super({ schema: link ? makeRemoteExecutableSchema({ schema, link }) : schema })
  }
}

export { CustomerBinding }
