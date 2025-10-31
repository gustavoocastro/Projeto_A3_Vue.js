import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useHabitStore = defineStore('habits', () => {
  const habits = ref([])
  
  const loadHabits = () => {
    const stored = localStorage.getItem('healthapp-habits')
    if (stored) {
      habits.value = JSON.parse(stored)
    }
  }
  
  const saveHabits = () => {
    localStorage.setItem('healthapp-habits', JSON.stringify(habits.value))
  }
  
  const addHabitEntry = (date, habitType, value) => {
    const entry = {
      id: Date.now(),
      date,
      habitType,
      value,
      timestamp: new Date().toISOString()
    }
    habits.value.push(entry)
    saveHabits()
  }
  
  const getHabitsByDate = (date) => {
    return habits.value.filter(h => h.date === date)
  }
  
  const getHabitsByType = (type) => {
    return habits.value.filter(h => h.habitType === type)
  }
  
  const getTodayHabits = computed(() => {
    const today = new Date().toISOString().split('T')[0]
    return getHabitsByDate(today)
  })
  
  const getWeeklyStats = computed(() => {
    const today = new Date()
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    
    const weeklyHabits = habits.value.filter(h => {
      const habitDate = new Date(h.date)
      return habitDate >= weekAgo && habitDate <= today
    })
    
    const stats = {
      water: 0,
      sleep: 0,
      exercise: 0,
      nutrition: 0
    }
    
    weeklyHabits.forEach(habit => {
      if (stats[habit.habitType] !== undefined) {
        stats[habit.habitType] += habit.value
      }
    })
    
    return stats
  })
  
  loadHabits()
  
  return {
    habits,
    addHabitEntry,
    getHabitsByDate,
    getHabitsByType,
    getTodayHabits,
    getWeeklyStats
  }
})
