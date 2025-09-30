// app/Services/ClienteService.ts
import Cliente from '#models/cliente'

export default class ClienteService {
  static async criarCliente(data: any) {
    const cliente = await Cliente.create(data)
    return cliente
  }

  static async listarClientes() {
    return Cliente.query()
  }

  static async buscarCliente(id: number) {
    return Cliente.findOrFail(id)
  }
}
