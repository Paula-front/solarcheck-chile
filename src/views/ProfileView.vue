<template>
  <section class="profile-page">
    <div class="container">
      <div v-if="authStore.user" class="profile-card">
        <div class="profile-avatar">
          {{ initials }}
        </div>

        <div class="profile-info">
          <span>👤 Perfil SolarCheck</span>
          <h1>{{ authStore.user.name }}</h1>
          <p>{{ authStore.user.email }}</p>

          <div class="profile-stats">
            <div>
              <strong>0</strong>
              <small>Favoritos</small>
            </div>

            <div>
              <strong>0</strong>
              <small>Consultas</small>
            </div>
          </div>

          <button @click="logout">
            Cerrar sesión
          </button>
        </div>
      </div>

      <div v-else class="profile-card guest-card">
        <h1>No has iniciado sesión</h1>
        <p>Ingresa para ver tu perfil, historial y favoritos.</p>

        <RouterLink to="/login" class="solar-btn">
          Iniciar sesión
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const initials = computed(() => {
  return authStore.user?.name
    ?.split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>