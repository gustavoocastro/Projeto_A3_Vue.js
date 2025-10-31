<template>
  <div id="app" class="min-h-screen">
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-primary">Saúde+</h1>
          </div>
          <div class="hidden md:flex space-x-8">
            <router-link to="/" class="nav-link">Dashboard</router-link>
            <router-link to="/habits" class="nav-link">Hábitos</router-link>
            <router-link to="/education" class="nav-link">Educação</router-link>
            <router-link to="/progress" class="nav-link">Progresso</router-link>
            <router-link to="/goals" class="nav-link">Metas</router-link>
          </div>
          <button @click="toggleMobileMenu" class="md:hidden text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        <div v-if="showMobileMenu" class="md:hidden pb-4">
          <router-link to="/" class="block py-2 nav-link">Dashboard</router-link>
          <router-link to="/habits" class="block py-2 nav-link">Hábitos</router-link>
          <router-link to="/education" class="block py-2 nav-link">Educação</router-link>
          <router-link to="/progress" class="block py-2 nav-link">Progresso</router-link>
          <router-link to="/goals" class="block py-2 nav-link">Metas</router-link>
        </div>
      </nav>
    </header>
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>
    
    <footer class="bg-white border-t mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-gray-600 text-sm">
          ODS 3.4: Reduzir doenças não transmissíveis por meio da prevenção e promoção da saúde
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-primary transition-colors font-medium;
}

.nav-link.router-link-active {
  @apply text-primary;
}
</style>
