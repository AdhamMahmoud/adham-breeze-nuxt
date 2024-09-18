<script lang="ts">
definePageMeta({
    layout: 'minimal',
    middleware: ['sanctum:guest'],
})

useSeoMeta({
    title: 'Welcome',
})
</script>

<template>
<UContainer class="flex flex-col gap-10">
    <ul class="text-center">
        <li class="mb-4">
            <ULink to="/user/login" >
                User Login
            </ULink>
        </li>
         <li class="mb-4">
            <ULink to="/partner/login" >
                Partner Login
            </ULink>
        </li>
          <li class="mb-4">
            <ULink to="/company/login" >
                Company Login
            </ULink>
        </li>
    </ul>
</UContainer>
</template>

<style scoped></style>
