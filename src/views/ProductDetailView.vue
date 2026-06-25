<template>

<section class="detail-page">

<div class="container">

<RouterLink to="/buscar" class="back-link">
← Volver
</RouterLink>

<div
v-if="product"
class="detail-card"
>

<div
class="detail-visual"
:style="{ background: brandStyle.gradient }"
>

<span>{{ brandStyle.icon }}</span>

<h2>{{ brand }}</h2>

</div>

<div class="detail-content">

<span class="detail-status">
Registro ISP vigente
</span>

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

<small>Fecha Registro</small>

<strong>{{ product.fechaRegistro }}</strong>

</div>

<div>

<small>Marca</small>

<strong>{{ brand }}</strong>

</div>

<div>

<small>Principio Activo</small>

<strong>{{ product.principioActivo || 'No informado' }}</strong>

</div>

</div>

</div>

</div>

<div
v-else
class="not-found-card"
>

<h2>Producto no encontrado</h2>

<RouterLink
to="/buscar"
class="solar-btn"
>

Volver

</RouterLink>

</div>

</div>

</section>

</template>

<script setup>

import { computed } from 'vue'

import solarProducts from '../data/protectores-solares-isp.json'

import {
detectBrand,
detectFps,
detectUse,
detectFormat
} from '../utils/productHelpers'

import {
getBrandStyle
} from '../utils/brandStyles'

const props = defineProps({

id:{
type:String,
required:true
}

})

const product = computed(()=>{

return solarProducts.find(item=>item.registro===props.id)

})

const brand = computed(()=>{

if(!product.value) return 'SolarCheck'

return detectBrand(product.value.nombre)

})

const fps = computed(()=>{

if(!product.value) return 'No informado'

return detectFps(product.value.nombre)

})

const use = computed(()=>{

if(!product.value) return 'General'

return detectUse(product.value.nombre)

})

const format = computed(()=>{

if(!product.value) return 'No informado'

return detectFormat(product.value.nombre)

})

const brandStyle = computed(()=>{

return getBrandStyle(brand.value)

})

</script>