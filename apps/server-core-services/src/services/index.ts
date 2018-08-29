export default {
  get BillingService() {
    return require('./BillingService').default
  },
  get CustomerService() {
    return require('./CustomerService').default
  },
}
