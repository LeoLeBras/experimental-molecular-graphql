import { Binding } from 'graphql-binding'
import { ServiceBroker } from 'moleculer'
import MoleculerLink from './MoleculerLink'
import createBindingContextName from './createBindingContextName'

export default function createContextBindings(
  bindingName: string,
  bindings: Binding[],
  broker: ServiceBroker,
) {
  return Object.keys(bindings).reduce((acc, key) => {
    if (key !== bindingName) {
      const name = createBindingContextName(key)
      const link = new MoleculerLink({ serviceName: name, serviceBroker: broker })
      const binding = new bindings[key](link)
      return { ...acc, [name]: binding }
    }
    return acc
  }, {})
}
