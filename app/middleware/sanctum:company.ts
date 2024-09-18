
import type { User } from '~~/models/user'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated, user } = useSanctumAuth<User>()

  if (!isAuthenticated.value) {
    return navigateTo('/user/login')
  }

  if (user.value?.email_verified_at === null) {
    return navigateTo('/verify-email')
  }

  // Get the expected role from route meta or define it here
  const expectedRole = to.meta.expectedRole

  // Check if user.role matches the expected role
  if (user.value?.role !== 'company') {
    return navigateTo('/' +user.value?.role)
  }
  const sanctumConfig = useSanctumConfig()
  sanctumConfig.redirect= {
    keepRequestedRoute: false,
    onLogin: '/company/dashboard',
    onLogout: '/company/',
    onAuthOnly: '/company/login',
    onGuestOnly: '/company/dashboard',
};
  // User has the expected role; allow access
})