<template>
  <div class="table">
    <table border="1">
      <thead>
        <tr class="table_title">
          <th>ID</th>
          <th>Todo</th>
          <th>Completed</th> <!-- Новая колонка для чекбокса -->
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedTodos" :key="item.id" class="tr-item">
          <td class="tr-id">{{ item.id }}</td>
          <td>{{ item.todo }}</td>
          <td>
            <input type="checkbox" v-model="item.completed" @change="toggleTodoComplete(item)" />
          </td>
          <td>
            <button @click="deleteTodo(item.id)" class="delete-button">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Включаем компонент пагинации -->
    <PaginationComp
      :totalPages="totalPages"
      :currentPage="currentPage"
      @changePage="changePage"
    />
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const currentPage = ref(1) // Начальная страница должна быть 1
    const itemsPerPage = ref(15)

    const todos = computed(() => props.todos)

    const totalPages = computed(() => Math.ceil(todos.value.length / itemsPerPage.value))
    const paginatedTodos = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value // Используйте currentPage.value
      const end = start + itemsPerPage.value // Используйте itemsPerPage.value

      return todos.value.slice(start, end)
    })

    function changePage(page) {
      
      currentPage.value = page
    }

    function toggleTodoComplete(item) {
      // Создаем новый массив с обновленным состоянием выполнения
      const updatedTodos = todos.value.map(e => {
        if (e.id === item.id) {
          return { ...e, completed: !e.completed }
        }
        return e // Возвращаем элемент без изменений
      })
      
      // Вызываем событие для передачи обновленного массива родителю
      emit('updateTodos', updatedTodos) // Используйте emit вместо this.$emit
    }

    function deleteTodo(id) {
      const newTodos = todos.value.filter(item => item.id !== id)
      emit('updateTodos', newTodos) // Используйте emit вместо this.$emit
    }

    return {
      currentPage,
      totalPages,
      paginatedTodos,
      changePage,
      toggleTodoComplete,
      deleteTodo
    }
  }
})

</script>

<style>
.table {
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  border-collapse: collapse;
  margin: 0 auto;
}

table td,
table th {
  padding: 8px;
  text-align: center;
}

table td:first-child,
table th:first-child {
  width: 40px;
}

table td {
  border-bottom: 1px solid rgb(78, 76, 76);
}

.table_title th {
  border-bottom: 2px solid black;
  padding-bottom: 8px;
  text-align: center;
}

.delete-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #ff1a1a;
}
</style>