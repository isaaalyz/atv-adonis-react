// app/Services/AplicacaoService.ts
import Aplicacao from '#models/aplicacao'
import ContaService from './conta_service.js'

export default class AplicacaoService {
  static async efetuarAplicacao(data: { conta_id: number, tipo: 'poupanca' | 'titulos' | 'acoes', valor: number }) {
    const { conta_id, tipo, valor } = data
    const saldo = await ContaService.verificarSaldo(conta_id)
    if (valor > saldo) throw new Error('Saldo insuficiente')

    // debita conta corrente
    await ContaService.atualizarSaldo(conta_id, -valor)

    // registra aplicação
    const aplicacao = await Aplicacao.create({ conta_id, tipo, valor })
    return aplicacao
  }

  static async resgatarAplicacao(aplicacaoId: number) {
    const aplicacao = await Aplicacao.findOrFail(aplicacaoId)
    // credita conta corrente
    await ContaService.atualizarSaldo(aplicacao.conta_id, aplicacao.valor)
    await aplicacao.delete()
    return aplicacao
  }
}
