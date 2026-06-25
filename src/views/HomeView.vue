<template>
  <section class="home-hero">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <span class="hero-badge">☀️ Protección solar informada</span>

          <h1>
            Consulta protectores solares registrados en el ISP de Chile
          </h1>

          <p class="hero-text">
            Busca por marca, nombre o número de registro y revisa información
            clara antes de comprar o recomendar un protector solar.
          </p>

          <div class="hero-search">
            <i class="bi bi-search"></i>
            <input
              v-model="search"
              type="text"
              placeholder="Buscar ISDIN, Eucerin, FPS 50..."
              @keyup.enter="goToSearch"
            />
            <button @click="goToSearch">Buscar</button>
          </div>

          <div class="hero-actions">
            <RouterLink to="/buscar" class="solar-btn">
              Explorar productos
            </RouterLink>

            <RouterLink to="/registro" class="btn-secondary-solar">
              Crear cuenta
            </RouterLink>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="solar-card-preview">
            <div class="sun-circle">☀️</div>
            <span class="status-pill">Registro encontrado</span>

            <h2>ISDIN Fusion Water</h2>
            <p>Protector solar facial · FPS 50+</p>

            <div class="info-grid">
              <div>
                <strong>FPS</strong>
                <span>50+</span>
              </div>
              <div>
                <strong>Uso</strong>
                <span>Facial</span>
              </div>
              <div>
                <strong>Formato</strong>
                <span>Fluido</span>
              </div>
              <div>
                <strong>Registro</strong>
                <span>ISP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="brand-section">
        <h2>Marcas populares</h2>

        <div class="brand-grid">
          <button
            v-for="brand in brands"
            :key="brand"
            class="brand-card"
            @click="searchBrand(brand)"
          >
            <span>☀️</span>
            {{ brand }}
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const brands = ['ISDIN', 'Eucerin', 'La Roche-Posay', 'Bioderma', 'Avon']

const goToSearch = () => {
  router.push({
    path: '/buscar',
    query: search.value ? { q: search.value } : {},
  })
}

const searchBrand = (brand) => {
  router.push({
    path: '/buscar',
    query: { q: brand },
  })
}
</script>