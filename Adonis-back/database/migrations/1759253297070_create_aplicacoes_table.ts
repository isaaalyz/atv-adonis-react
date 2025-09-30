import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Aplicacoes extends BaseSchema {
  protected tableName = 'aplicacoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.enum('tipo', ['poupanca', 'titulos', 'acoes']).notNullable()
      table.decimal('valor', 12, 2).notNullable()

      table.integer('conta_id').unsigned().references('id').inTable('contas').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
