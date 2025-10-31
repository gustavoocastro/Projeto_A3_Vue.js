<template>
  <div class="goals">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Metas de Saúde</h2>
    
    <div class="card mb-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Criar Nova Meta</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Título da Meta</label>
          <input 
            v-model="newGoal.title" 
            type="text" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Ex: Beber 2L de água por dia"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
          <textarea 
            v-model="newGoal.description" 
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Descreva sua meta e como pretende alcançá-la"
          ></textarea>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
            <select v-model="newGoal.category" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="water">💧 Hidratação</option>
              <option value="sleep">😴 Sono</option>
              <option value="exercise">🏃 Exercícios</option>
              <option value="nutrition">🥗 Alimentação</option>
              <option value="mental">🧘 Saúde Mental</option>
              <option value="other">📋 Outro</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Data Alvo</label>
            <input 
              v-model="newGoal.targetDate" 
              type="date" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        
        <button @click="createGoal" class="btn-primary w-full">
          Criar Meta
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Metas Ativas</h3>
        <div v-if="activeGoals.length > 0" class="space-y-3">
          <div v-for="goal in activeGoals" :key="goal.id" class="p-4 border border-gray-200 rounded-lg">
            <div class="flex items-start justify-between mb-2">
              <div class="flex items-start flex-1">
                <span class="text-2xl mr-3">{{ getCategoryIcon(goal.category) }}</span>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-800">{{ goal.title }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ goal.description }}</p>
                  <p class="text-xs text-gray-500 mt-2">
                    Alvo: {{ formatDate(goal.targetDate) }}
                  </p>
                </div>
              </div>
              <button @click="toggleComplete(goal.id)" class="text-gray-400 hover:text-green-600 ml-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-8 text-gray-500">
          <p>Nenhuma meta ativa</p>
          <p class="text-sm">Crie sua primeira meta acima!</p>
        </div>
      </div>
      
      <div class="card">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Metas Concluídas</h3>
        <div v-if="completedGoals.length > 0" class="space-y-3">
          <div v-for="goal in completedGoals" :key="goal.id" class="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-start justify-between">
              <div class="flex items-start flex-1">
                <span class="text-2xl mr-3">{{ getCategoryIcon(goal.category) }}</span>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-800 line-through">{{ goal.title }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ goal.description }}</p>
                </div>
              </div>
              <div class="flex gap-2">
                <button @click="toggleComplete(goal.id)" class="text-green-600 hover:text-green-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </button>
                <button @click="deleteGoal(goal.id)" class="text-red-500 hover:text-red-700">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-8 text-gray-500">
          <p>Nenhuma meta concluída ainda</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGoalStore } from '../stores/goalStore'

const goalStore = useGoalStore()

const newGoal = ref({
  title: '',
  description: '',
  category: 'water',
  targetDate: ''
})

const activeGoals = computed(() => goalStore.goals.filter(g => !g.completed))
const completedGoals = computed(() => goalStore.goals.filter(g => g.completed))

const createGoal = () => {
  if (newGoal.value.title.trim()) {
    goalStore.addGoal({ ...newGoal.value })
    newGoal.value = {
      title: '',
      description: '',
      category: 'water',
      targetDate: ''
    }
  }
}

const toggleComplete = (id) => {
  goalStore.toggleGoalComplete(id)
}

const deleteGoal = (id) => {
  goalStore.deleteGoal(id)
}

const getCategoryIcon = (category) => {
  const icons = {
    water: '💧',
    sleep: '😴',
    exercise: '🏃',
    nutrition: '🥗',
    mental: '🧘',
    other: '📋'
  }
  return icons[category] || '📋'
}

const formatDate = (dateString) => {
  if (!dateString) return 'Sem data definida'
  return new Date(dateString).toLocaleDateString('pt-BR')
}
</script>
