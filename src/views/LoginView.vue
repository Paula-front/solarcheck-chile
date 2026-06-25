<template>
  <section class="auth-page">
    <div class="auth-card">
      <div class="auth-info">
        <span>☀️ SolarCheck Chile</span>
        <h1>Ingresa a tu cuenta</h1>
        <p>
          Guarda tus productos favoritos, revisa tu historial y consulta
          protectores solares de forma más rápida.
        </p>

        <div class="demo-box">
          <strong>Usuario demo</strong>
          <small>demo@solarcheck.cl</small>
          <small>Demo1234</small>
        </div>
      </div>

      <form class="auth-form" @submit.prevent="handleLogin">
        <h2>Iniciar sesión</h2>

        <div v-if="error" class="auth-error">
          {{ error }}
        </div>

        <label>
          Correo
          <input v-model="form.email" type="email" required />
        </label>

        <label>
          Contraseña
          <input v-model="form.password" type="password" required />
        </label>

        <button type="submit">Ingresar</button>

        <p>
          ¿No tienes cuenta?
          <RouterLink to="/registro">Crear cuenta</RouterLink>
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
  email: '',
  password: '',
})

const handleLogin = () => {
  try {
    error.value = ''
    authStore.login(form)
    router.push('/perfil')
  } catch (err) {
    error.value = err.message
  }
}
</script>