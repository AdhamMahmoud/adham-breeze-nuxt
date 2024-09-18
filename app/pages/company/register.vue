<script lang="ts" setup>
import AuthRegisterForm from '@/components/AuthCompany/AuthRegisterForm'

definePageMeta({
  layout: 'minimal',
  middleware: ['sanctum:guest'],
})

useSeoMeta({
  title: 'Register',
})
</script>

<template>
  <AuthRegisterForm />
</template>

<style scoped></style>
