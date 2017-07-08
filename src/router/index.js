import Vue from 'vue'
import Router from 'vue-router'

import home from 'components/Home'
import layout from 'components/Layout'

import about from 'components/content/About'
import skills from 'components/content/Skills'
import projects from 'components/content/Projects'
import contact from 'components/content/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/',
      component: layout,
      children: [
        {
          path: 'about',
          component: about
        },
        {
          path: 'skills',
          component: skills
        },
        {
          path: 'projects',
          component: projects
        },
        {
          path: 'contact',
          component: contact
        }
      ]
    }
  ]
})
