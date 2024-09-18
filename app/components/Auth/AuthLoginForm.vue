<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent, Form } from '#ui/types'
const sanctumFetch = useSanctumClient()
const { refreshIdentity } = useSanctumAuth()
  const sanctumConfig = useSanctumConfig()
  sanctumConfig.redirect= {
    keepRequestedRoute: false,
    onLogin: '/user/dashboard',
    onLogout: '/user/',
    onAuthOnly: '/user/login',
    onGuestOnly: '/user/dashboard',
};
interface Props {
  token?: string
}

const props = defineProps<Props>()

const { login } = useSanctumAuth()

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean(),
})

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
})

type Schema = z.output<typeof schema>
type OtpSchema = z.output<typeof otpSchema>

const form = ref<Form<Schema>>()
const otpForm = ref<Form<OtpSchema>>()
const token = ref('') // Store token here

const state = reactive<Schema>({
  email: '',
  password: '',
  remember: false,
})

const otpState = reactive<OtpSchema>({
  otp: '',
})

// Flag to determine if OTP is needed
const needsOtp = ref(false)
const loginResponse = ref(null)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value?.clear()

  const credentials = event.data

  try {
    // Perform login
     const response = await sanctumFetch('/login/otp', {
      method: 'POST',
      body: credentials,
    })


    // If OTP is required, set the flag
    if (response.message == "OTP sent. Please verify the OTP to log in.") {
      needsOtp.value = true
      loginResponse.value = response // Save response for further OTP verification
    } 
  } catch (error) {
    const err = useSanctumError(error)
    if (err.isValidationError) {
      form.value?.setErrors(err.bag)
    }
  }
}

// Function to verify the OTP
async function verifyOtp() {
  otpForm.value?.clear()

  try {
    // Verify OTP with the backend
    const credentials = {
      email:state.email,
      password: state.password,
      otp:otpState.otp
    }
    await login(credentials)

  } catch (error) {
    const err = useSanctumError(error)
    if (err.isValidationError) {
      form.value?.setErrors(err.bag)

    }
  }
}
</script>

<template>
  <UForm
    ref="form"
    :schema="schema"
    :state="state"
    class="space-y-4 sm:min-w-80 md:min-w-96 max-w-md"
    @submit="onSubmit"
    v-if="!needsOtp"
  >
    <h2>User Login</h2>

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" icon="i-heroicons-at-symbol" autocomplete="username" trailing />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" autocomplete="current-password" icon="i-heroicons-lock-closed" trailing />
    </UFormGroup>

    <UFormGroup name="remember_me">
      <UCheckbox v-model="state.remember" name="remember_me" label="Remember me" />
    </UFormGroup>

    <div class="flex justify-end gap-4 items-center">
      <ULink to="/forgot-password" class="text-sm text-gray-500 underline">
        Forgot your password?
      </ULink>
        <ULink to="/user/register" class="text-sm text-gray-500 underline">
        Register
      </ULink>
      <UButton type="submit">Login</UButton>
    </div>
  </UForm>

  <!-- OTP Verification Form -->
  <UForm
    ref="otpForm"
    :schema="otpSchema"
    :state="otpState"
    class="space-y-4 sm:min-w-80 md:min-w-96 max-w-md"
    @submit.prevent="verifyOtp"
    v-if="needsOtp"
  >
    <h2>Verify OTP</h2>
    <p>Check your mail inbox for the otp code.</p>

    <UFormGroup label="OTP" name="otp">
      <UInput v-model="otpState.otp" placeholder="Enter 6-digit OTP" />
    </UFormGroup>

    <UButton type="submit">Verify OTP</UButton>
  </UForm>
</template>

<style scoped></style>
