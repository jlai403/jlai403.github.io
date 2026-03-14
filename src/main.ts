import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home/index.vue'

import './style.css'
import 'font-awesome/css/font-awesome.css'

const routes = [
  { path: '/', component: Home },
  { path: '/stack', component: () => import('./components/Stack/index.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const baseTitle = 'joey lai'
  const pageTitle = to.path === '/stack' ? 'stack' : 'software developer'
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
