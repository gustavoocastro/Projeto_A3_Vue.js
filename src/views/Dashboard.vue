<template>
  <div class="dashboard">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Bem-vindo ao Saúde+</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-blue-100 text-sm">Hábitos Hoje</p>
            <p class="text-3xl font-bold">{{ todayHabitsCount }}</p>
          </div>
          <div class="text-5xl">✅</div>
        </div>
      </div>
      
      <div class="card bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-green-100 text-sm">Metas Ativas</p>
            <p class="text-3xl font-bold">{{ activeGoalsCount }}</p>
          </div>
          <div class="text-5xl">🎯</div>
        </div>
      </div>
      
      <div class="card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-100 text-sm">Sequência</p>
            <p class="text-3xl font-bold">{{ streak }} dias</p>
          </div>
          <div class="text-5xl">🔥</div>
        </div>
      </div>
    </div>
    
    <div class="card mb-8">
      <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span class="text-2xl mr-2">💡</span>
        Dica de Saúde do Dia
      </h3>
      <div v-if="dailyTip" class="bg-green-50 border-l-4 border-primary p-4 rounded">
        <div class="flex items-start">
          <span class="text-4xl mr-4">{{ dailyTip.icon }}</span>
          <div>
            <h4 class="font-bold text-lg text-gray-800 mb-2">{{ dailyTip.title }}</h4>
            <p class="text-gray-700">{{ dailyTip.content }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Ações Rápidas</h3>
        <div class="space-y-3">
          <router-link to="/habits" class="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="flex items-center">
              <span class="text-2xl mr-3">📊</span>
              <div>
                <p class="font-semibold">Registrar Hábito</p>
                <p class="text-sm text-gray-600">Adicione seus hábitos diários</p>
              </div>
            </div>
          </router-link>
          
          <router-link to="/goals" class="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="flex items-center">
              <span class="text-2xl mr-3">🎯</span>
              <div>
                <p class="font-semibold">Definir Meta</p>
                <p class="text-sm text-gray-600">Crie novas metas de saúde</p>
              </div>
            </div>
          </router-link>
          
          <router-link to="/education" class="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="flex items-center">
              <span class="text-2xl mr-3">📚</span>
              <div>
                <p class="font-semibold">Aprender</p>
                <p class="text-sm text-gray-600">Explore conteúdo educacional</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      
      <div class="card">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Resumo Semanal</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">💧</span>
              <span class="font-medium">Água</span>
            </div>
            <span class="font-bold text-blue-600">{{ weeklyStats.water }}L</span>
          </div>
          
          <div class="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">😴</span>
              <span class="font-medium">Sono</span>
            </div>
            <span class="font-bold text-purple-600">{{ weeklyStats.sleep }}h</span>
          </div>
          
          <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">🏃</span>
              <span class="font-medium">Exercícios</span>
            </div>
            <span class="font-bold text-green-600">{{ weeklyStats.exercise }} min</span>
          </div>
          
          <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">🥗</span>
              <span class="font-medium">Refeições</span>
            </div>
            <span class="font-bold text-orange-600">{{ weeklyStats.nutrition }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useHabitStore } from '../stores/habitStore'
import { useGoalStore } from '../stores/goalStore'
import { healthTips } from '../data/healthTips'

const habitStore = useHabitStore()
const goalStore = useGoalStore()

const { getTodayHabits, getWeeklyStats } = storeToRefs(habitStore)

const todayHabitsCount = computed(() => getTodayHabits.value.length)
const activeGoalsCount = computed(() => goalStore.goals.filter(g => !g.completed).length)
const weeklyStats = getWeeklyStats
const streak = ref(7)

const dailyTip = computed(() => {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
  return healthTips[dayOfYear % healthTips.length]
})
</script>
