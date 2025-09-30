import type { HttpContext } from '@adonisjs/core/http'
import ContaService from '#services/conta_service'

export default class ContaController {
  async store({ request, response }: HttpContext) {
    try {
      const payload = request.only(['cliente_id', 'numero_conta', 'numero_agencia', 'saldo'])
      const conta = await ContaService.criarConta(payload)
      return response.status(201).json({ message: 'OK', data: conta })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR', error: error.message })
    }
  }

  async saldo({ params, response }: HttpContext) {
    try {
      const saldo = await ContaService.verificarSaldo(params.id)
      return response.status(200).json({ message: 'OK', saldo })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }
}
