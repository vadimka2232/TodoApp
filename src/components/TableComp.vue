<template>
    <TablePage :todos="todos" />
  </template>
  
  <script>
  import TablePage from './TablePage.vue';
  
  export default {
    components: {
      TablePage
    },
    data() {
      return {
        todos: [] // Инициализируем пустой массив
      };
    },
    async mounted() {
      // Асинхронно загружаем данные, когда компонент смонтирован
      let response = await fetch('https://dummyjson.com/todos');
      let data = await response.json();
      this.todos = data.todos; // Заполняем массив данными
    }
  };
  </script>