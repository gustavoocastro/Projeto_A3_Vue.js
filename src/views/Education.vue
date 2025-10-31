<template>
  <div class="education">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Conteúdo Educacional</h2>
    
    <div class="mb-6">
      <div class="flex flex-wrap gap-2">
        <button 
          @click="selectedCategory = 'all'"
          :class="['px-4 py-2 rounded-lg font-medium transition-colors', selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
        >
          Todos
        </button>
        <button 
          @click="selectedCategory = 'prevention'"
          :class="['px-4 py-2 rounded-lg font-medium transition-colors', selectedCategory === 'prevention' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
        >
          Prevenção
        </button>
        <button 
          @click="selectedCategory = 'nutrition'"
          :class="['px-4 py-2 rounded-lg font-medium transition-colors', selectedCategory === 'nutrition' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
        >
          Nutrição
        </button>
        <button 
          @click="selectedCategory = 'exercise'"
          :class="['px-4 py-2 rounded-lg font-medium transition-colors', selectedCategory === 'exercise' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
        >
          Exercícios
        </button>
        <button 
          @click="selectedCategory = 'mental'"
          :class="['px-4 py-2 rounded-lg font-medium transition-colors', selectedCategory === 'mental' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
        >
          Saúde Mental
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div 
        v-for="article in filteredContent" 
        :key="article.id"
        class="card cursor-pointer hover:shadow-lg transition-shadow"
        @click="openArticle(article)"
      >
        <div class="flex items-start">
          <span class="text-4xl mr-4">{{ article.icon }}</span>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-gray-800 mb-2">{{ article.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ article.description }}</p>
            <span class="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full">
              {{ getCategoryLabel(article.category) }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="selectedArticle" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" @click="closeArticle">
      <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <div class="flex items-center">
            <span class="text-4xl mr-4">{{ selectedArticle.icon }}</span>
            <h3 class="text-2xl font-bold text-gray-800">{{ selectedArticle.title }}</h3>
          </div>
          <button @click="closeArticle" class="text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div class="prose max-w-none" v-html="selectedArticle.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { educationalContent } from '../data/healthTips'

const selectedCategory = ref('all')
const selectedArticle = ref(null)

const filteredContent = computed(() => {
  if (selectedCategory.value === 'all') {
    return educationalContent
  }
  return educationalContent.filter(article => article.category === selectedCategory.value)
})

const getCategoryLabel = (category) => {
  const labels = {
    prevention: 'Prevenção',
    nutrition: 'Nutrição',
    exercise: 'Exercícios',
    mental: 'Saúde Mental'
  }
  return labels[category] || category
}

const openArticle = (article) => {
  selectedArticle.value = article
}

const closeArticle = () => {
  selectedArticle.value = null
}
</script>

<style scoped>
:deep(.prose h3) {
  @apply text-xl font-bold text-gray-800 mt-6 mb-3;
}

:deep(.prose p) {
  @apply text-gray-700 mb-4;
}

:deep(.prose ul) {
  @apply list-disc list-inside space-y-2 text-gray-700 mb-4;
}

:deep(.prose strong) {
  @apply font-semibold text-gray-800;
}
</style>
