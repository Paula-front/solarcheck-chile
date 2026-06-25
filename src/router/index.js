import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HistoryView from '../views/HistoryView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/buscar', name: 'search', component: SearchView },
  { path: '/producto/:id', name: 'product-detail', component: ProductDetailView, props: true },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/registro', name: 'register', component: RegisterView },
  { path: '/historial', name: 'history', component: HistoryView },
  { path: '/favoritos', name: 'favorites', component: FavoritesView },
  { path: '/perfil', name: 'profile', component: ProfileView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router