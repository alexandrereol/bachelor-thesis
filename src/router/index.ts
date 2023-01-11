import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExerciseGreedy from '../views/ExerciseGreedy.vue'
import ExerciseKruskal from '../views/ExerciseKruskal.vue'
import ExercisePrim from '../views/ExercisePrim.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/ex/greedy',
    name: 'ExerciseGreedy',
    component: ExerciseGreedy
  },
  {
    path: '/ex/kruskal',
    name: 'ExerciseKruskal',
    component: ExerciseKruskal
  },
  {
    path: '/ex/prim',
    name: 'ExercisePrim',
    component: ExercisePrim
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
