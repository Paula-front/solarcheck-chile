<template>
  <section class="search-page">
    <div class="container">
      <div class="search-header">
        <span>🔎 Buscador solar</span>
        <h1>Encuentra protectores solares registrados</h1>
        <p>
          Busca por marca, nombre del producto o número de registro ISP.
        </p>
      </div>

      <div class="search-box">
        <i class="bi bi-search"></i>
        <input
          v-model="search"
          type="text"
          placeholder="Buscar ISDIN, Avon, FPS 50..."
        />
      </div>

      <p class="results-count">
        {{ filteredProducts.length }} productos encontrados
      </p>

      <div class="product-grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/product/ProductCard.vue'
import { solarProducts } from '../data/solarProducts'
import { normalizeText } from '../utils/productHelpers'

const route = useRoute()
const search = ref('')

onMounted(() => {
  search.value = route.query.q || ''
})

const filteredProducts = computed(() => {
  const term = normalizeText(search.value)

  if (!term) return solarProducts

  return solarProducts.filter((product) => {
    const searchableText = normalizeText(`
      ${product.nombre}
      ${product.registro}
      ${product.empresa}
    `)

    return searchableText.includes(term)
  })
})
</script>