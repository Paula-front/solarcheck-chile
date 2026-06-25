<template>
  <article class="product-card">
    <div
      class="product-brand-visual"
      :style="{ background: brandStyle.gradient }"
    >
      <span>{{ brandStyle.icon }}</span>
      <strong>{{ brand }}</strong>
    </div>

    <div class="product-card-body">
      <div class="product-badges">
        <span>FPS {{ fps }}</span>
        <span>{{ use }}</span>
        <span>{{ format }}</span>
      </div>

      <h3>{{ product.nombre }}</h3>

      <p class="product-company">
        {{ product.empresa }}
      </p>

      <div class="product-info">
        <small>Registro ISP</small>
        <strong>{{ product.registro }}</strong>
      </div>

      <RouterLink
        class="product-link"
        :to="`/producto/${product.id}`"
      >
        Ver detalle
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import {
  detectBrand,
  detectFps,
  detectUse,
  detectFormat,
} from '../../utils/productHelpers'
import { getBrandStyle } from '../../utils/brandStyles'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const brand = computed(() => detectBrand(props.product.nombre))
const fps = computed(() => detectFps(props.product.nombre))
const use = computed(() => detectUse(props.product.nombre))
const format = computed(() => detectFormat(props.product.nombre))
const brandStyle = computed(() => getBrandStyle(brand.value))
</script>