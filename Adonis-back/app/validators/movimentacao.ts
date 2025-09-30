import vine from '@vinejs/vine'

export const createMovimentacao = vine.compile(
  vine.object({
    conta_origem_id: vine.number(),
    conta_destino_id: vine.number().optional(),
    valor: vine.number(),
    tipo: vine.string() // 'deposito', 'saque', 'transferencia'
  })
)
