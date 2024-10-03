<template>
  <div>
    <TablePage :todos="todos" @updateTodos="handleUpdateTodos" /> <!-- Используем компонент -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import TablePage from './TablePage.vue'; 

export default defineComponent({
  props: {
    selectedProfile: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const todos = ref([]); 

    onMounted(async () => {
      if (props.selectedProfile?.userId) {
        const response = await fetch('https://dummyjson.com/todos?limit=150');
        const data = await response.json();
        
        todos.value = data.todos.map(todo => {
          if (todo.userId < 50) { todo.userId = 13; } 
          return todo;
        }).filter(todo => todo.userId === props.selectedProfile.userId);
      } else {
        todos.value = [];
      }
    });

    function handleUpdateTodos(updatedTodos) {
      todos.value = updatedTodos;
    }

    return {
      todos,
      handleUpdateTodos,
      TablePage
    };
  }
});
</script>
