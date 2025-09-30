import type { HttpContext } from '@adonisjs/core/http'
import MovimentacaoService from '#services/movimentacao_service'

export default class MovimentacaoController {
  async store({ request, response }: HttpContext) {
    try {
      const payload = request.only(['conta_origem_id', 'conta_destino_id', 'valor'])
      const Movimentacao = await MovimentacaoService.efetuarMovimentacao(payload)
      return response.status(201).json({ message: 'OK', data: Movimentacao })
    } catch (error) {
      return response.status(400).json({ message: 'ERROR', error: error.message })
    }
  }
}
