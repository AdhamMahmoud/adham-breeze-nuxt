import type { User } from '~~/models/user'

export default defineNuxtRouteMiddleware(() => {
  const sanctumConfig = useSanctumConfig()

  const { isAuthenticated, user } = useSanctumAuth<User>()

  if (isAuthenticated.value) {
    return navigateTo('/' +user.value?.role + '/dashboard')
  }


})
