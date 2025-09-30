import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Gerente/Admin
    await User.create({
      role: 'gerente',
      email: 'gerente@banif.com',
      password: '1234',
      papel_id: 1, // gerente
    })

    // Clientes
    await User.createMany([
      {
        role: 'cliente',
        email: 'bruna@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'isadora@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'analice@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'heloisa1@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'heloisa2@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'kamillinha@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'ban@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'luscas@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'jao@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'ana@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'vinicius@banif.com',
        password: '1234',
        papel_id: 0,
      },
      {
        role: 'cliente',
        email: 'nicolas@banif.com',
        password: '1234',
        papel_id: 0,
      },
    ])
  }
}
