import { createRouter, createWebHistory } from 'vue-router'
//import TestTest from '../views/TestTest.vue'
//import ExerciseTest01 from '../views/ExerciseTest01.vue'
//import ExerciseTest from '../views/Exercise/ExerciseTest.vue'
//import ExerciseTest02 from '../views/Exercise02/ExerciseTest02.vue'
//import ExerciseTest03 from '../views/Exercise03/ExerciseTest03.vue'
//import ExerciseTest04 from '../views/Exercise04/ExerciseTest04.vue'
import ExerciseTest05 from '../views/Exercise05/ExerciseTest05.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //component: TestTest
    //component: ExerciseTest01
    //component: ExerciseTest
    //component: ExerciseTest02
    //component: ExerciseTest03
    // component: ExerciseTest04
    component: ExerciseTest05
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
