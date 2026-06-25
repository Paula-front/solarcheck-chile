<template>
  <section class="search-page">
    <div class="container">

      <div class="search-header">
        <span>🔎 Buscador Solar</span>
        <h1>Encuentra protectores solares registrados</h1>
        <p>
          Busca por nombre, marca, empresa o número de registro ISP.
        </p>
      </div>

      <div class="search-box">
        <i class="bi bi-search"></i>

        <input
          v-model="search"
          type="text"
          placeholder="Ej: ISDIN, Eucerin, 187C-4454/21..."
        />
      </div>

      <p class="results-count">
        {{ filteredProducts.length }} productos encontrados
      </p>

      <div class="product-grid">

        <ProductCard
          v-for="product in filteredProducts"
          :key="product.registro"
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

import solarProducts from '../data/protectores-solares-isp.json'

import { normalizeText } from '../utils/productHelpers'

const route = useRoute()

const search = ref('')

onMounted(() => {
  search.value = route.query.q || ''
})

const filteredProducts = computed(() => {

  const term = normalizeText(search.value)

  if (!term) return solarProducts

  return solarProducts.filter(product => {

    const searchable = normalizeText(`
      ${product.nombre}
      ${product.registro}
      ${product.empresa}
      ${product.principioActivo}
      ${product.controlLegal}
    `)

    return searchable.includes(term)

  })

})
</script>