import type { HttpContext } from '@adonisjs/core/http'
import ClienteService from '#services/cliente_service'

export default class ClienteController {
  async store({ request, response }: HttpContext) {
    try {
      const payload = request.only([
        'nome', 'email', 'senha', 'cpf', 'cidade', 'estado', 'rua', 'numero'
      ])
      const cliente = await ClienteService.criarCliente(payload)
      return response.status(201).json({ message: 'OK', data: cliente })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR', error: error.message })
    }
  }

  async index({ response }: HttpContext) {
    try {
      const clientes = await ClienteService.listarClientes()
      return response.status(200).json({ message: 'OK', data: clientes })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const cliente = await ClienteService.buscarCliente(params.id)
      return response.status(200).json({ message: 'OK', data: cliente })
    } catch (error) {
      return response.status(500).json({ message: 'ERROR' })
    }
  }
}
