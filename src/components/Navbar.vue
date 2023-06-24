<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
let currentPage = ref('home')
function changePage(newPage){
  currentPage.value = newPage
  console.log(currentPage.value)
  router.push({
    name: currentPage.value
  })

}

</script>
 
<template>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <router-link to="Home" class="flex items-center">
        <img src="../assets/logo/K.png" class="h-14 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-mono whitespace-nowrap dark:text-white">Korapin JENG</span>
    </router-link>

    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button @click="changePage('home')" :class="currentPage === 'home' ? 'text-violet-700' : 'text-black'" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</button>
        </li>
        <li>
          <button @click="changePage('about')" :class="currentPage === 'about' ? 'text-violet-700' : 'text-black'" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</button>
        </li>
        <li>
          <button @click="changePage('services')" :class="currentPage === 'services' ? 'text-violet-700' : 'text-black'" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</button>
        </li>
        <li>
          <button @click="changePage('projects')" :class="currentPage === 'projects' ? 'text-violet-700' : 'text-black'" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</button>
        </li>
        <li>
          <button @click="changePage('contact')" :class="currentPage === 'contact' ? 'text-violet-700' : 'text-black'" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
 
<style scoped>

</style>