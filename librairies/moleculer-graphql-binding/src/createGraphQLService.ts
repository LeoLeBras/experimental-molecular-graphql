import { ServiceBroker } from 'moleculer'
import MoleculerLink from './MoleculerLink'
import createBindingInstanceName from './createBindingInstanceName'
import createContextBindings from './createContextBindings'
import createActions from './createActions'

export default function createGraphQLService(name: string, bindings, database) {
  return function(broker: ServiceBroker) {
    const bindingName = createBindingInstanceName(name)
    const binding = new bindings[bindingName]()
    const contextBindings = createContextBindings(bindingName, bindings, broker)
    const context = { bindings: contextBindings, database }
    const actions = createActions(binding, bindings, context)
    const link = new MoleculerLink({ serviceName: name, serviceBroker: broker })
    return { name, actions, binding: new bindings[bindingName](link) }
  }
}
