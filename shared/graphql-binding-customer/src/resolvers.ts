import { GraphQLResolveInfo } from 'graphql'
import { BillingBinding } from '@acme/graphql-binding-billing'
import { Client } from './binding'

interface Context {
  database: any
  bindings: {
    billing: BillingBinding
  }
}

export default {
  Query: {
    client: async (root, args: { id?: number }, ctx: Context): Promise<Client | null> => {
      return ctx.database.Client.findById(args.id)
    },
  },
  Client: {
    invoices: (root: Client, args, ctx: Context, info: GraphQLResolveInfo | string) => {
      return ctx.bindings.billing.query.invoices({ where: { clientId: root.id } }, info)
    },
  },
}
