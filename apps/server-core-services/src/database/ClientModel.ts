export default class ClientModel {
  static findById(id: string) {
    return Promise.resolve({ id, firstName: 'Léo', lastName: 'Le Bras' })
  }
}
