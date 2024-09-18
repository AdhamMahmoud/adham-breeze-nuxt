<script lang="ts" setup>
import AuthRegisterForm from '@/components/AuthPartner/AuthRegisterForm'

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
