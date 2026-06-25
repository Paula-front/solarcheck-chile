<template>
  <section class="auth-page">
    <div class="auth-card">
      <div class="auth-info register-info">
        <span>🌊 Bienvenida a SolarCheck</span>
        <h1>Crea tu cuenta</h1>
        <p>
          Regístrate para guardar favoritos, revisar tu historial de consultas
          y tener una experiencia personalizada.
        </p>
      </div>

      <form class="auth-form" @submit.prevent="handleRegister">
        <h2>Registro</h2>

        <div v-if="error" class="auth-error">
          {{ error }}
        </div>

        <label>
          Nombre
          <input v-model="form.name" type="text" required />
        </label>

        <label>
          Correo
          <input v-model="form.email" type="email" required />
        </label>

        <label>
          Contraseña
          <input v-model="form.password" type="password" minlength="6" required />
        </label>

        <button type="submit">Crear cuenta</button>

        <p>
          ¿Ya tienes cuenta?
          <RouterLink to="/login">Ingresar</RouterLink>
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  password: '',
})

const handleRegister = () => {
  try {
    error.value = ''
    authStore.register(form)
    router.push('/perfil')
  } catch (err) {
    error.value = err.message
  }
}
</script>