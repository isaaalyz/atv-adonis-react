// app/Services/ContaService.ts
import Conta from '#models/conta'
import MovimentacoesService from './movimentacao_service.js'

export default class ContaService {
  static async criarConta(data: any) {
    const conta = await Conta.create(data)
    return conta
  }

  static async verificarSaldo(contaId: number) {
    const conta = await Conta.findOrFail(contaId)
    return conta.saldo
  }

  static async atualizarSaldo(contaId: number, valor: number) {
    const conta = await Conta.findOrFail(contaId)
    conta.saldo += valor
    await conta.save()
    return conta
  }
}
