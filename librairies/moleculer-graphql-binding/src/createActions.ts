import { Context } from 'moleculer'
import { Binding } from 'graphql-binding'
import { execute, parse } from 'graphql'
import createBindingInstanceName from './createBindingInstanceName'

export default function createAction(binding: Binding, bindings, context) {
  return Object.keys(binding.query).reduce(
    (acc, operationName) => ({
      ...acc,
      [`query.${operationName}`]: (ctx: Context) => {
        return new Promise(async (resolve, reject) => {
          try {
            const { variables, fragment } = ctx.params
            const options = { context }
            const response = await binding.delegate(
              'query',
              operationName,
              variables,
              fragment,
              options,
            )
            resolve(response)
          } catch (err) {
            reject(err)
          }
        })
      },

      execute: {
        params: { serviceName: 'string', query: 'string', variables: 'object' },
        handler(ctx: Context) {
          return new Promise(async (resolve, reject) => {
            try {
              const { serviceName, query, variables } = ctx.params
              const scopedBinding = new bindings[(createBindingInstanceName(serviceName))]()
              const response = await execute(
                scopedBinding.schema,
                parse(query),
                undefined,
                context,
                variables,
              )
              resolve(response)
            } catch (err) {
              reject(err)
            }
          })
        },
      },
    }),
    {},
  )
}
