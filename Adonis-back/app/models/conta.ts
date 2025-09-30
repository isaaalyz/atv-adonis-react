import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import Movimentacao from './movimentacao.js'
import Aplicacao from './aplicacao.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Conta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numero_conta: string

  @column()
  declare agencia: string

  @column()
  declare saldo: number

  @column()
  declare cliente_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamentos
  @belongsTo(() => Cliente, { foreignKey: 'cliente_id' })
  declare cliente: BelongsTo<typeof Cliente>

  @hasMany(() => Movimentacao, { foreignKey: 'conta_id' })
  declare movimentacoes: HasMany<typeof Movimentacao>

  @hasMany(() => Aplicacao, { foreignKey: 'conta_id' })
  declare aplicacoes: HasMany<typeof Aplicacao>
}
