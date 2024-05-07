<template>
  <!-- first commit -->

  <BackLog :todos="todos" />
</template>

<script setup lang="ts">
import BackLog from './components/BackLog.vue';
import { ref, onMounted } from 'vue';

import type { Todo } from './types';

// type Category = 'job' | 'home' | 'other';
// type Status = 'todo' | 'done' | 'inProgress' | 'backlog';

// export interface Todo {
//   title: string;
//   id: number;
//   category: Category;
//   status: Status;
// };

const todos = ref<Todo[]>([
  { title: 'Uklid sklep', id: 1, category: 'home', status: 'todo' },
  { title: 'Kup suroviny', id: 2, category: 'home', status: 'done' },
  { title: 'Kup suroviny', id: 3, category: 'home', status: 'inProgress' },
  { title: 'Kup suroviny', id: 4, category: 'home', status: 'backlog' },
])

onMounted(() => {
  console.log('mounted!')

})
</script>


<style scoped>

</style>./components/BackLog.vue
