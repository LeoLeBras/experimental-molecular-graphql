import { ServiceBroker } from 'moleculer'
import { ApolloLink, Observable } from 'apollo-link'
import { print } from 'graphql'

interface Options {
  serviceName: string
  serviceBroker: ServiceBroker
}

function createMoleculerLink(options: Options) {
  return new ApolloLink(
    operation =>
      new Observable(observer => {
        const { serviceBroker, serviceName } = options
        const { variables, query } = operation

        serviceBroker
          .call('customer.execute', { query: print(query), variables, serviceName })
          .then(results => {
            observer.next(results)
            observer.complete()
          })
          .catch(err => {
            observer.error(err)
          })
      }),
  )
}

export default class MoleculerLink extends ApolloLink {
  constructor(options: Options) {
    super(createMoleculerLink(options).request)
  }
}
