import { createGraphQLService } from 'moleculer-graphql-binding'
import { ServiceBroker } from 'moleculer'

export default function BillingService(broker: ServiceBroker, bindings, database) {
  return createGraphQLService('billing', bindings, database)(broker)
}
