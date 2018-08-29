import { createGraphQLService } from 'moleculer-graphql-binding'
import { ServiceBroker } from 'moleculer'

export default function CustomerService(broker: ServiceBroker, bindings, database) {
  return createGraphQLService('customer', bindings, database)(broker)
}
