import type { HttpContext } from '@adonisjs/core/http'
import AplicacaoService from '#services/aplicacao_service'

export default class AplicacaoController {
  async store({ request, response }: HttpContext) {
    try {
      const payload = request.only(['conta_id', 'tipo', 'valor'])
      const aplicacao = await AplicacaoService.efetuarAplicacao(payload)
      return response.status(201).json({ message: 'OK', data: aplicacao })
    } catch (error) {
      return response.status(400).json({ message: 'ERROR', error: error.message })
    }
  }
}
