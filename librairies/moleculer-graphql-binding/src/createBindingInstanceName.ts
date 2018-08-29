import { titleCase } from 'change-case'

export default function createBindingInstanceName(name: string) {
  return `${titleCase(name)}Binding`
}
