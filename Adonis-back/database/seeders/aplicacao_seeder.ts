import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Conta from '#models/conta'
import Aplicacao from '#models/aplicacao'

export default class extends BaseSeeder {
  public async run() {
    const contas = await Conta.all()

    for (const conta of contas) {
      // Aplicação em Poupança
      await Aplicacao.create({
        conta_id: conta.id,
        tipo: 'poupanca',
        valor: 200
      })

      // Aplicação em Ações
      await Aplicacao.create({
        conta_id: conta.id,
        tipo: 'acoes',
        valor: 150
      })
    }
  }
}
