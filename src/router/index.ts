import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExerciseDescending from '../views/ExerciseDescending.vue'
import ExerciseAscending from '../views/ExerciseAscending.vue'
import ExercisePartition from '../views/ExercisePartition.vue'

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
    path: '/ex/descending',
    name: 'ExerciseDescending',
    component: ExerciseDescending
  },
  {
    path: '/ex/ascending',
    name: 'ExerciseAscending',
    component: ExerciseAscending
  },
  {
    path: '/ex/partition',
    name: 'ExercisePartition',
    component: ExercisePartition
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
