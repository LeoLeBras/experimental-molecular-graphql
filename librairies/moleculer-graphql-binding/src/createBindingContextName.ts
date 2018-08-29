import { ServiceBroker } from 'moleculer'
import { lowerCase } from 'change-case'

export default function createBindingInstanceName(name: string) {
  return `${lowerCase(name.slice(0, -7))}`
}
