<template>
  <div>
    <PaginationComp :todos="todos" /> <!-- Используем компонент пагинации -->
  </div>
</template>

<script>
import PaginationComp from './PaginationComp.vue'; // Импортируем компонент пагинации

export default {
  components: {
    PaginationComp
  },    
  props: {
    selectedProfile: {
      type: Object, // Задаем тип данных как число
      required: true // Обозначаем, что этот пропс обязателен
    }
  },
  data() {
    return {
      todos: [] // Инициализируем пустой массив
    };
  },
  async mounted() {
    // Асинхронно загружаем данные, когда компонент смонтирован
    let response = await fetch('https://dummyjson.com/todos?limit=150');
    let data = await response.json();
    this.todos = data.todos; // Заполняем массив данными
    // console.log(this.todos.map(e=> e.userId))
    this.todos = this.todos.map(e => {
      if (e.userId < 50) {e.userId = 13} return e
    })
    this.todos = this.todos.filter(e => e.userId == this.selectedProfile.userId)
    // console.log(this.todos)
  }
};
</script>

<style>
</style>
