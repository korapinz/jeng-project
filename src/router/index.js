import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },
    {
      path: '/Services',
      name: 'services',
      component: Services
    },
    {
      path: '/Projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router