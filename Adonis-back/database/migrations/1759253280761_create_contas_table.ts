import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Contas extends BaseSchema {
  protected tableName = 'contas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('numero_conta').notNullable().unique()
      table.string('agencia').notNullable()
      table.decimal('saldo', 12, 2).defaultTo(0)

      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
