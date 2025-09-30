import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '#models/cliente'
import Conta from '#models/conta'

export default class extends BaseSeeder {
  public async run() {
    const clientes = await Cliente.all()

    for (const cliente of clientes) {
      await Conta.create({
        cliente_id: cliente.id,
        numero_conta: Math.floor(1000 + Math.random() * 9000).toString(), // conta 4 dígitos
        agencia: Math.floor(100 + Math.random() * 900).toString(), // agência 3 dígitos
        saldo: 1000 // saldo inicial
      })
    }
  }
}
