<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum:auth', 'sanctum:user'],
})

useSeoMeta({
  title: 'Dashboard',
})

const { user } = useSanctumAuth()
</script>

<template>
  <UAlert
    title="You are logged in!"
    color="sky"
    variant="soft"
  />

  <UCard>
    <template #header>
      <h1>Welcome to user dashboard!</h1>
    </template>

    <div class="flex flex-col gap-2">
      <span>user details:</span>

      <code class="text-sm bg-gray-200 dark:bg-gray-200/10 p-2 rounded">
        {{ user }}
      </code>

      <DashboardBroadcasting />
    </div>
  </UCard>
</template>

<style scoped></style>
