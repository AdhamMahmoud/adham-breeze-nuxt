<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
  middleware: ['sanctum:guest'],
})

useSeoMeta({
  title: 'Unauthorized',
})
</script>

<template>
  <UContainer class="flex flex-col gap-10">
   <h2>unauthorized</h2>
  </UContainer>
</template>

<style scoped></style>
