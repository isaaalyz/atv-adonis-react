import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    senha: vine.string()
  })
)

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim(),
    email: vine.string().email(),
    senha: vine.string(),
    papel_id: vine.number()
  })
)
