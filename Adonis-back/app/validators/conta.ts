import vine from '@vinejs/vine'

export const createConta = vine.compile(
  vine.object({
    cliente_id: vine.number(),
    numero_conta: vine.number(),
    numero_agencia: vine.number(),
    saldo: vine.number()
  })
)

export const updateConta = vine.compile(
  vine.object({
    saldo: vine.number().optional()
  })
)
