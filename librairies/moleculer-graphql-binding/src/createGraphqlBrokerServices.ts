import { forEach } from 'iterall'
import { ServiceBroker } from 'moleculer'
import { Binding } from 'graphql-binding'

interface GraphQLBrokerServicesResponse {
  broker: ServiceBroker
  bindings: { [name: string]: Binding }
}

export default function createGraphqlBrokerServices(services, bindings, database) {
  return function(broker: ServiceBroker): GraphQLBrokerServicesResponse {
    let instantiatedBindings = {}
    forEach(Object.keys(services), (serviceName: string) => {
      const { name, actions, binding } = services[serviceName](broker, bindings, database)
      broker.createService({ name, actions })
      instantiatedBindings[name] = binding
    })
    return { broker, bindings: instantiatedBindings }
  }
}
