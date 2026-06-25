<template>
  <nav class="navbar navbar-expand-lg solar-navbar">
    <div class="container">
      <RouterLink class="navbar-brand solar-logo" to="/">
        <span class="logo-icon">☀️</span>
        <span>SolarCheck <strong>Chile</strong></span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#solarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="solarMenu" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Inicio</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/buscar">Buscar</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/favoritos">Favoritos</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/historial">Historial</RouterLink>
          </li>

          <li v-if="authStore.isAuthenticated" class="nav-item">
            <RouterLink class="btn-login" to="/perfil">
              {{ authStore.user.name }}
            </RouterLink>
          </li>

          <li v-else class="nav-item">
            <RouterLink class="btn-login" to="/login">Ingresar</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()
</script>