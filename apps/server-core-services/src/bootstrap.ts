import { ServiceBroker, Service } from 'moleculer'
import { createGraphqlBrokerServices } from 'moleculer-graphql-binding'
import { Binding } from 'graphql-binding'
import services from './services'
import bindings from './bindings'
import database from './database'

interface BootstrapResponse {
  broker: ServiceBroker
  bindings: { [name: string]: Binding }
}

export default async function bootstrap(
  resolve: (reponse: BootstrapResponse) => void,
  reject: (err: Error) => void,
) {
  try {
    // Initialize servicer broker
    const options = { metrics: true }
    const broker = new ServiceBroker(options)

    // Create GraphQL services
    const response = createGraphqlBrokerServices(services, bindings, database)(broker)

    // Start broker
    await broker.start()

    // Resolve response
    resolve(response)
  } catch (err) {
    // Reject error
    reject(err)
  }
}
