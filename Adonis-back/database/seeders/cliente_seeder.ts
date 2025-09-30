import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '#models/cliente'

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        nome: 'Bruna Paes',
        email: 'bruna@email.com',
        senha: '123456',
        cpf: '11111111111',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua A',
        numero: '100'
      },
      {
        nome: 'Isadora Lyz',
        email: 'isadora@email.com',
        senha: '123456',
        cpf: '22222222222',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua B',
        numero: '200'
      },
      {
        nome: 'Analice Santos',
        email: 'analice@email.com',
        senha: '123456',
        cpf: '33333333333',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua C',
        numero: '300'
      },
      {
        nome: 'Heloisa Sapatona',
        email: 'heloisa.sapatona@email.com',
        senha: '123456',
        cpf: '44444444444',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua D',
        numero: '400'
      },
      {
        nome: 'Heloisa Hetero',
        email: 'heloisa.hetero@email.com',
        senha: '123456',
        cpf: '55555555555',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua E',
        numero: '500'
      },
      {
        nome: 'Kamillinha',
        email: 'kamillinha@email.com',
        senha: '123456',
        cpf: '66666666666',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua F',
        numero: '600'
      },
      {
        nome: 'Ban Backyardigans',
        email: 'ban@email.com',
        senha: '123456',
        cpf: '77777777777',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua G',
        numero: '700'
      },
      {
        nome: 'Luscas',
        email: 'luscas@email.com',
        senha: '123456',
        cpf: '88888888888',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua H',
        numero: '800'
      },
      {
        nome: 'Jao Grauzudo',
        email: 'jao@email.com',
        senha: '123456',
        cpf: '99999999999',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua I',
        numero: '900'
      },
      {
        nome: 'Ana Xuriço',
        email: 'ana.xurico@email.com',
        senha: '123456',
        cpf: '10101010101',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua J',
        numero: '1010'
      },
      {
        nome: 'Vinicius Ossos de Vidro',
        email: 'vinicius@email.com',
        senha: '123456',
        cpf: '11111111112',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua K',
        numero: '1100'
      },
      {
        nome: 'Nicolas O Grande',
        email: 'nicolas@email.com',
        senha: '123456',
        cpf: '12121212121',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua L',
        numero: '1200'
      },
    ])
  }
}
