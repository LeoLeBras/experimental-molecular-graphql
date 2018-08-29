export default {
  get CustomerBinding() {
    return require('@acme/graphql-binding-customer').CustomerBinding
  },
  get BillingBinding() {
    return require('@acme/graphql-binding-billing').BillingBinding
  },
}
