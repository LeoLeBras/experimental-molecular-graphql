export default {
  get Client() {
    return require('./ClientModel').default
  },
  get Invoice() {
    return require('./InvoiceModel').default
  },
}
