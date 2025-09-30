import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'
import User from '#models/user'
import { permissions } from '../utils/permissoes.js'

export default class ContaPolicy extends BasePolicy {
  list(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].listConta
  }

  view(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].viewConta
  }

  create(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].createConta
  }

  edit(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].editConta
  }

  delete(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].deleteConta
  }
}
