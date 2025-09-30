import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('cpf', 11).notNullable().unique()
      table.string('cidade')
      table.string('estado')
      table.string('rua')
      table.string('numero')
      table.string('senha').notNullable()


      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
