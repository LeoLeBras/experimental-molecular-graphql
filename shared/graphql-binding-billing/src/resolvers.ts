import { GraphQLResolveInfo } from 'graphql'
import { CustomerBinding } from '@acme/graphql-binding-customer'
import { Invoice, InvoiceCreateInput } from './binding'

interface Context {
  database: any
  bindings: {
    customer: CustomerBinding
  }
}

export default {
  Query: {
    invoices: (root, args: { where?: { clientId?: number } }, ctx: Context) => {
      return ctx.database.Invoice.findAllByClientId(args)
    },
  },
  Mutation: {
    createInvoice: (args: { input: InvoiceCreateInput }) => {
      // return ctx.database.Invoice.create(args)
      return Promise.resolve(null)
    },
  },
  Invoice: {
    client: (root: Invoice, args, ctx: Context, info: GraphQLResolveInfo | string) => {
      return ctx.bindings.customer.query.client({ id: root.clientId }, info)
    },
  },
}
