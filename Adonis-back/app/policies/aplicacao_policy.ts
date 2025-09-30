import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'
import User from '#models/user'
import { permissions } from '../utils/permissoes.js'

export default class AplicacaoPolicy extends BasePolicy {
  list(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].listAplicacao
  }

  view(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].viewAplicacao
  }

  create(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].createAplicacao
  }

  edit(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].editAplicacao
  }

  delete(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].deleteAplicacao
  }
}
