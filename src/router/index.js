import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Habits from '../views/Habits.vue'
import Education from '../views/Education.vue'
import Progress from '../views/Progress.vue'
import Goals from '../views/Goals.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/habits',
    name: 'Habits',
    component: Habits
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/goals',
    name: 'Goals',
    component: Goals
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
