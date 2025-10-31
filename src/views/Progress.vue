<template>
  <div class="progress">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Meu Progresso</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="card">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Resumo Semanal</h3>
        <div class="space-y-4">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="flex items-center">
                <span class="text-xl mr-2">💧</span>
                <span class="font-medium">Água</span>
              </span>
              <span class="font-bold text-blue-600">{{ weeklyStats.water }}L</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" :style="{ width: getPercentage(weeklyStats.water, 14) + '%' }"></div>
            </div>
            <p class="text-xs text-gray-500 mt-1">Meta: 14L/semana (2L/dia)</p>
          </div>
          
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="flex items-center">
                <span class="text-xl mr-2">😴</span>
                <span class="font-medium">Sono</span>
              </span>
              <span class="font-bold text-purple-600">{{ weeklyStats.sleep }}h</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-purple-500 h-2 rounded-full" :style="{ width: getPercentage(weeklyStats.sleep, 56) + '%' }"></div>
            </div>
            <p class="text-xs text-gray-500 mt-1">Meta: 56h/semana (8h/dia)</p>
          </div>
          
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="flex items-center">
                <span class="text-xl mr-2">🏃</span>
                <span class="font-medium">Exercícios</span>
              </span>
              <span class="font-bold text-green-600">{{ weeklyStats.exercise }} min</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-green-500 h-2 rounded-full" :style="{ width: getPercentage(weeklyStats.exercise, 150) + '%' }"></div>
            </div>
            <p class="text-xs text-gray-500 mt-1">Meta: 150 min/semana</p>
          </div>
          
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="flex items-center">
                <span class="text-xl mr-2">🥗</span>
                <span class="font-medium">Nutrição</span>
              </span>
              <span class="font-bold text-orange-600">{{ weeklyStats.nutrition }} porções</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-orange-500 h-2 rounded-full" :style="{ width: getPercentage(weeklyStats.nutrition, 35) + '%' }"></div>
            </div>
            <p class="text-xs text-gray-500 mt-1">Meta: 35 porções/semana (5/dia)</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Estatísticas</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <div>
              <p class="text-sm text-gray-600">Total de Hábitos Registrados</p>
              <p class="text-3xl font-bold text-blue-600">{{ totalHabits }}</p>
            </div>
            <span class="text-4xl">📊</span>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
            <div>
              <p class="text-sm text-gray-600">Metas Ativas</p>
              <p class="text-3xl font-bold text-green-600">{{ activeGoalsCount }}</p>
            </div>
            <span class="text-4xl">🎯</span>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
            <div>
              <p class="text-sm text-gray-600">Metas Concluídas</p>
              <p class="text-3xl font-bold text-purple-600">{{ completedGoalsCount }}</p>
            </div>
            <span class="text-4xl">✅</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Gráfico Semanal</h3>
      <div class="h-64">
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useHabitStore } from '../stores/habitStore'
import { useGoalStore } from '../stores/goalStore'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const habitStore = useHabitStore()
const goalStore = useGoalStore()
const chartCanvas = ref(null)
const chartInstance = ref(null)

const { getWeeklyStats } = storeToRefs(habitStore)

const weeklyStats = getWeeklyStats
const totalHabits = computed(() => habitStore.habits.length)
const activeGoalsCount = computed(() => goalStore.goals.filter(g => !g.completed).length)
const completedGoalsCount = computed(() => goalStore.goals.filter(g => g.completed).length)

const getPercentage = (value, target) => {
  return Math.min((value / target) * 100, 100)
}

const createChart = () => {
  if (chartCanvas.value) {
    chartInstance.value = new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: ['Água (L)', 'Sono (h)', 'Exercícios (min)', 'Refeições'],
        datasets: [{
          label: 'Esta Semana',
          data: [
            weeklyStats.value.water,
            weeklyStats.value.sleep,
            weeklyStats.value.exercise,
            weeklyStats.value.nutrition
          ],
          backgroundColor: [
            'rgba(59, 130, 246, 0.7)',
            'rgba(139, 92, 246, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(251, 146, 60, 0.7)'
          ],
          borderColor: [
            'rgb(59, 130, 246)',
            'rgb(139, 92, 246)',
            'rgb(16, 185, 129)',
            'rgb(251, 146, 60)'
          ],
          borderWidth: 2
        }, {
          label: 'Meta Semanal',
          data: [14, 56, 150, 35],
          backgroundColor: 'rgba(209, 213, 219, 0.3)',
          borderColor: 'rgb(209, 213, 219)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    })
  }
}

const updateChart = () => {
  if (chartInstance.value) {
    chartInstance.value.data.datasets[0].data = [
      weeklyStats.value.water,
      weeklyStats.value.sleep,
      weeklyStats.value.exercise,
      weeklyStats.value.nutrition
    ]
    chartInstance.value.update()
  }
}

onMounted(() => {
  createChart()
})

watch(weeklyStats, () => {
  updateChart()
}, { deep: true })

onBeforeUnmount(() => {
  if (chartInstance.value) {
    chartInstance.value.destroy()
  }
})
</script>
