import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home/index.vue'

import './style.css'
import 'font-awesome/css/font-awesome.css'

const routes = [
  { path: '/', component: Home },
  { path: '/stack', component: () => import('./components/Stack/index.vue') },
  { path: '/experience', component: () => import('./components/Experience/index.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const baseTitle = 'joey lai'
  let pageTitle = 'software developer'
  if (to.path === '/stack') pageTitle = 'stack'
  if (to.path === '/experience') pageTitle = 'experience'
  document.title = `${baseTitle} • ${pageTitle}`
})

const app = createApp(App)

// Theme Management Logic
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
}

initTheme()

app.use(router)
app.mount('#root')
