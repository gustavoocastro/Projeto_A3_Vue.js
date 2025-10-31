import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGoalStore = defineStore('goals', () => {
  const goals = ref([])
  
  const loadGoals = () => {
    const stored = localStorage.getItem('healthapp-goals')
    if (stored) {
      goals.value = JSON.parse(stored)
    }
  }
  
  const saveGoals = () => {
    localStorage.setItem('healthapp-goals', JSON.stringify(goals.value))
  }
  
  const addGoal = (goal) => {
    const newGoal = {
      id: Date.now(),
      ...goal,
      createdAt: new Date().toISOString(),
      completed: false
    }
    goals.value.push(newGoal)
    saveGoals()
  }
  
  const updateGoal = (id, updates) => {
    const index = goals.value.findIndex(g => g.id === id)
    if (index !== -1) {
      goals.value[index] = { ...goals.value[index], ...updates }
      saveGoals()
    }
  }
  
  const deleteGoal = (id) => {
    goals.value = goals.value.filter(g => g.id !== id)
    saveGoals()
  }
  
  const toggleGoalComplete = (id) => {
    const goal = goals.value.find(g => g.id === id)
    if (goal) {
      goal.completed = !goal.completed
      saveGoals()
    }
  }
  
  loadGoals()
  
  return {
    goals,
    addGoal,
    updateGoal,
    deleteGoal,
    toggleGoalComplete
  }
})
