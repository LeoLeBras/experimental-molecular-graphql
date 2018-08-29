import bootstrap from './bootstrap'

bootstrap(
  async ({ broker, bindings: { customer } }) => {
    console.log(`🎊  Server started`)

    // First call with simple broker call
    const firstResponse = await broker.call('customer.query.client', {
      variables: { id: 2 },
    })
    console.log('➡️ ', firstResponse)

    // Second call via broker with fragment
    const secondResponse = await broker.call('customer.query.client', {
      variables: { id: 2 },
      fragment: 'fragment client on Client { id, firstName, lastName, invoices { id } }',
    })
    console.log('➡️ ', secondResponse)

    // Thrid call via binding
    const thridResponse = await customer.query.client({ id: 2 })
    console.log('➡️ ', thridResponse)
  },
  err => {
    console.log(`😡  Something went wrong ${err}`)
  },
)
