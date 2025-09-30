import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Conta from './conta.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Aplicacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare tipo: 'poupanca' | 'titulos' | 'acoes'

  @column()
  declare valor: number

  @column()
  declare conta_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relacionamentos
  @belongsTo(() => Conta, { foreignKey: 'conta_id' })
  declare conta: BelongsTo<typeof Conta>
}
