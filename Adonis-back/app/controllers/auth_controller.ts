import type { HttpContext } from '@adonisjs/core/http'
import Cliente from '#models/cliente'

export default class AuthController {
  // Registrar cliente
  async register({ request, response }: HttpContext) {
    try {
      const payload = request.only([
        'nome', 'email', 'senha', 'cpf', 'cidade', 'estado', 'rua', 'numero'
      ])

      const cliente = await Cliente.create(payload)

      return response.created({
        message: 'Cliente registrado com sucesso',
        cliente: {
          id: cliente.id,
          nome: cliente.nome,
          email: cliente.email,
          cpf: cliente.cpf,
          cidade: cliente.cidade,
          estado: cliente.estado,
          rua: cliente.rua,
          numero: cliente.numero,
          createdAt: cliente.createdAt
        }
      })
    } catch (error) {
      return response.badRequest({
        message: 'Erro ao registrar cliente',
        error: error.message
      })
    }
  }

  // Login cliente
  async login({ request, response }: HttpContext) {
    try {
      const { email, senha } = request.only(['email', 'senha'])

      const cliente = await Cliente.query()
        .where('email', email)
        .andWhere('senha', senha)
        .first()

      if (!cliente) {
        return response.unauthorized({ message: 'Credenciais inválidas' })
      }

      return response.ok({
        message: 'Login realizado com sucesso',
        cliente: {
          id: cliente.id,
          nome: cliente.nome,
          email: cliente.email,
          cpf: cliente.cpf
        }
      })
    } catch (error) {
      return response.unauthorized({ message: 'Erro no login' })
    }
  }

  // Logout (apenas resposta, sem token)
  async logout({ response }: HttpContext) {
    return response.ok({ message: 'Logout realizado com sucesso' })
  }

  // Info do cliente logado
  async me({ request, response }: HttpContext) {
    try {
      const { id } = request.body() // ou outro método de pegar cliente logado
      const cliente = await Cliente.findOrFail(id)
      return response.ok({
        cliente: {
          id: cliente.id,
          nome: cliente.nome,
          email: cliente.email,
          cpf: cliente.cpf,
          cidade: cliente.cidade,
          estado: cliente.estado,
          rua: cliente.rua,
          numero: cliente.numero,
          createdAt: cliente.createdAt
        }
      })
    } catch (error) {
      return response.unauthorized({ message: 'Cliente não encontrado' })
    }
  }
}
