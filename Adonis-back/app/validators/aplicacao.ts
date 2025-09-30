import vine from '@vinejs/vine'

export const createAplicacao = vine.compile(
  vine.object({
    conta_id: vine.number(),
    tipo: vine.string(), // 'poupanca', 'acoes', 'titulos'
    valor: vine.number()
  })
)
