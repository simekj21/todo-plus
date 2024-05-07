<template>
  <menu-icon /> 
  <delete-forever-icon />
  <svg-icon type="mdi" :path="path"></svg-icon>
  <ul>
    <li 
      v-for="todo in todos" :key="todo.id"
      class="bg-gray-300 p-1 m-1 rounded-lg text-white even:bg-blue-300 odd:bg-green-300"
    >
      {{ todo.title }}
    </li>
  </ul>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import MenuIcon from 'vue-material-design-icons/Menu.vue';
import DeleteForeverIcon from 'vue-material-design-icons/Delete.vue';

import type { Todo } from './../types';

// import { mdiAbacus } from '@mdi/js';

import { useBackLog } from "../composables/useBackLog";

const { addNewItem, getBackLog } = useBackLog();

const props = defineProps({
  todos: Array<Todo>,
})

const count = ref(0)

onMounted(() => {
  console.log('Props:', props.todos)
  
})
</script>

