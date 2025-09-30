import type { HttpContext } from '@adonisjs/core/http'
import Conta from '#models/conta'
import Movimentacao from '#models/movimentacao'

export default class MovimentacaoController {
  static efetuarMovimentacao(payload: { conta_origem_id: any; conta_destino_id: any; valor: any }) {
    throw new Error('Method not implemented.')
  }
  // Transferência (Pix)
  async transferir({ request, response }: HttpContext) {
    try {
      const { conta_origem_id, conta_destino_id, valor } = request.only([
        'conta_origem_id',
        'conta_destino_id',
        'valor'
      ])

      const contaOrigem = await Conta.findOrFail(conta_origem_id)
      const contaDestino = await Conta.findOrFail(conta_destino_id)

      if (contaOrigem.saldo < valor) {
        return response.badRequest({ message: 'Saldo insuficiente' })
      }

      // Atualiza saldos
      contaOrigem.saldo -= valor
      contaDestino.saldo += valor

      await contaOrigem.save()
      await contaDestino.save()

      // Registra movimentações
      await Movimentacao.create({
        conta_id: conta_origem_id,
        tipo: 'transferencia',
        valor: -valor
      })
      await Movimentacao.create({
        conta_id: conta_destino_id,
        tipo: 'transferencia',
        valor: valor
      })

      return response.ok({ message: 'Transferência realizada com sucesso' })
    } catch (error) {
      return response.badRequest({ message: 'Erro na transferência', error: error.message })
    }
  }

  // Depósito
  async depositar({ request, response }: HttpContext) {
    try {
      const { conta_id, valor } = request.only(['conta_id', 'valor'])
      const conta = await Conta.findOrFail(conta_id)

      conta.saldo += valor
      await conta.save()

      await Movimentacao.create({
        conta_id,
        tipo: 'deposito',
        valor
      })

      return response.ok({ message: 'Depósito realizado com sucesso' })
    } catch (error) {
      return response.badRequest({ message: 'Erro no depósito', error: error.message })
    }
  }

  // Saque
  async sacar({ request, response }: HttpContext) {
    try {
      const { conta_id, valor } = request.only(['conta_id', 'valor'])
      const conta = await Conta.findOrFail(conta_id)

      if (conta.saldo < valor) {
        return response.badRequest({ message: 'Saldo insuficiente' })
      }

      conta.saldo -= valor
      await conta.save()

      await Movimentacao.create({
        conta_id,
        tipo: 'saque',
        valor: -valor
      })

      return response.ok({ message: 'Saque realizado com sucesso' })
    } catch (error) {
      return response.badRequest({ message: 'Erro no saque', error: error.message
    })}}}