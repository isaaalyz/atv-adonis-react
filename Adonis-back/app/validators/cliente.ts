import vine from '@vinejs/vine'

// Validator para criar cliente
export const createCliente = vine.compile(
  vine.object({
    nome: vine.string().trim(),
    email: vine.string().email(),
    senha: vine.string(),
    cpf: vine.string().trim(),
    cidade: vine.string().trim(),
    estado: vine.string().trim(),
    rua: vine.string().trim(),
    numero: vine.string().trim()
  })
)

// Validator para atualizar cliente
export const updateCliente = vine.compile(
  vine.object({
    nome: vine.string().trim().optional(),
    email: vine.string().email().optional(),
    senha: vine.string().optional(),
    cpf: vine.string().trim().optional(),
    cidade: vine.string().trim().optional(),
    estado: vine.string().trim().optional(),
    rua: vine.string().trim().optional(),
    numero: vine.string().trim().optional()
  })
)
