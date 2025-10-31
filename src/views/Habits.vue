<template>
  <div class="habits">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Rastreador de Hábitos</h2>
    
    <div class="card mb-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Registrar Hábito de Hoje</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Hábito</label>
            <select v-model="newHabit.type" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="water">💧 Água (litros)</option>
              <option value="sleep">😴 Sono (horas)</option>
              <option value="exercise">🏃 Exercício (minutos)</option>
              <option value="nutrition">🥗 Refeições saudáveis</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Valor</label>
            <input 
              v-model.number="newHabit.value" 
              type="number" 
              step="0.1"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Digite o valor"
            />
          </div>
          
          <button @click="addHabit" class="btn-primary w-full">
            Registrar Hábito
          </button>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-3">Metas Diárias Recomendadas</h4>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center">
              <span class="text-xl mr-2">💧</span>
              <span><strong>Água:</strong> 2-3 litros/dia</span>
            </li>
            <li class="flex items-center">
              <span class="text-xl mr-2">😴</span>
              <span><strong>Sono:</strong> 7-9 horas/noite</span>
            </li>
            <li class="flex items-center">
              <span class="text-xl mr-2">🏃</span>
              <span><strong>Exercício:</strong> 30+ minutos/dia</span>
            </li>
            <li class="flex items-center">
              <span class="text-xl mr-2">🥗</span>
              <span><strong>Nutrição:</strong> 5 porções frutas/vegetais</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Hábitos de Hoje</h3>
      <div v-if="todayHabits.length > 0" class="space-y-3">
        <div v-for="habit in todayHabits" :key="habit.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div class="flex items-center">
            <span class="text-2xl mr-3">{{ getHabitIcon(habit.habitType) }}</span>
            <div>
              <p class="font-semibold">{{ getHabitLabel(habit.habitType) }}</p>
              <p class="text-sm text-gray-600">{{ formatTime(habit.timestamp) }}</p>
            </div>
          </div>
          <span class="font-bold text-primary text-lg">{{ habit.value }} {{ getHabitUnit(habit.habitType) }}</span>
        </div>
      </div>
      <div v-else class="text-center py-8 text-gray-500">
        <p class="text-lg">Nenhum hábito registrado hoje</p>
        <p class="text-sm">Comece registrando seu primeiro hábito acima!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useHabitStore } from '../stores/habitStore'

const habitStore = useHabitStore()

const { getTodayHabits } = storeToRefs(habitStore)

const newHabit = ref({
  type: 'water',
  value: 0
})

const todayHabits = getTodayHabits

const addHabit = () => {
  if (newHabit.value.value > 0) {
    const today = new Date().toISOString().split('T')[0]
    habitStore.addHabitEntry(today, newHabit.value.type, newHabit.value.value)
    newHabit.value.value = 0
  }
}

const getHabitIcon = (type) => {
  const icons = {
    water: '💧',
    sleep: '😴',
    exercise: '🏃',
    nutrition: '🥗'
  }
  return icons[type] || '📊'
}

const getHabitLabel = (type) => {
  const labels = {
    water: 'Água',
    sleep: 'Sono',
    exercise: 'Exercício',
    nutrition: 'Refeições Saudáveis'
  }
  return labels[type] || type
}

const getHabitUnit = (type) => {
  const units = {
    water: 'L',
    sleep: 'h',
    exercise: 'min',
    nutrition: 'porções'
  }
  return units[type] || ''
}

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}
</script>
