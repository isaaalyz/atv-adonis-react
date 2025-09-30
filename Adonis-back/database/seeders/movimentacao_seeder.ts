import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Conta from '#models/conta'
import Movimentacao from '#models/movimentacao' 


export default class extends BaseSeeder {
  public async run() {
    const contas = await Conta.all()

    for (const conta of contas) {
      // Depósito inicial
      await Movimentacao.create({
        conta_id: conta.id,
        tipo: 'deposito',
        valor: 500
      })

      // Saque inicial
      await Movimentacao.create({
        conta_id: conta.id,
        tipo: 'saque',
        valor: 100
      })

      // Transferência fictícia (se tiver pelo menos 2 contas)
      if (contas.length > 1) {
        const destino = contas.find(c => c.id !== conta.id)
        if (destino) {
          await Movimentacao.create({
            conta_id: conta.id,
            tipo: 'transferencia',
            valor: 50
          })
          await Movimentacao.create({
            conta_id: destino.id,
            tipo: 'transferencia',
            valor: 50
          })
        }
      }
    }
  }
}
