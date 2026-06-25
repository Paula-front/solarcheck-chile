<template>
  <section class="detail-page">
    <div class="container">
      <RouterLink to="/buscar" class="back-link">
        ← Volver a la búsqueda
      </RouterLink>

      <div v-if="product" class="detail-card">
        <div
          class="detail-visual"
          :style="{ background: brandStyle.gradient }"
        >
          <span>{{ brandStyle.icon }}</span>
          <h2>{{ brand }}</h2>
        </div>

        <div class="detail-content">
          <span class="detail-status">Registro ISP encontrado</span>

          <h1>{{ product.nombre }}</h1>
          <p>{{ product.empresa }}</p>

          <div class="detail-badges">
            <span>FPS {{ fps }}</span>
            <span>{{ use }}</span>
            <span>{{ format }}</span>
          </div>

          <div class="detail-grid">
            <div>
              <small>Registro ISP</small>
              <strong>{{ product.registro }}</strong>
            </div>

            <div>
              <small>Fecha registro</small>
              <strong>{{ product.fechaRegistro }}</strong>
            </div>

            <div>
              <small>Marca detectada</small>
              <strong>{{ brand }}</strong>
            </div>

            <div>
              <small>Uso sugerido</small>
              <strong>{{ use }}</strong>
            </div>
          </div>

          <div class="detail-note">
            <strong>Importante:</strong>
            La información se basa en registros disponibles del ISP y en datos
            interpretados desde el nombre del producto.
          </div>
        </div>
      </div>

      <div v-else class="not-found-card">
        <h1>Producto no encontrado</h1>
        <RouterLink to="/buscar" class="solar-btn">
          Buscar otro producto
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { solarProducts } from '../data/solarProducts'
import {
  detectBrand,
  detectFps,
  detectUse,
  detectFormat,
} from '../utils/productHelpers'
import { getBrandStyle } from '../utils/brandStyles'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const product = computed(() =>
  solarProducts.find((item) => item.id === props.id)
)

const brand = computed(() =>
  product.value ? detectBrand(product.value.nombre) : 'SolarCheck'
)

const fps = computed(() =>
  product.value ? detectFps(product.value.nombre) : 'No informado'
)

const use = computed(() =>
  product.value ? detectUse(product.value.nombre) : 'General'
)

const format = computed(() =>
  product.value ? detectFormat(product.value.nombre) : 'No informado'
)

const brandStyle = computed(() => getBrandStyle(brand.value))
</script>