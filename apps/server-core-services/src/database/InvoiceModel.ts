export default class InvoiceModel {
  static findAllByClientId(clientId: string) {
    return Promise.resolve([
      {
        id: 1,
        name: '00001',
      },
      {
        id: 2,
        name: '00002',
      },
    ])
  }
}
