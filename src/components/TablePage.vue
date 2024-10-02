<template>
  <div class="Table">
    <table border="1">
      <thead>
        <tr class="Table_title">
          <th>ID</th>
          <th>Todo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in todos" :key="item.id" class="tr-item">
          <td class="tr-id">{{ item.id }}</td>
          <td>{{ item.todo }}</td>
          <td>
            <button @click="deleteTodo(item.id)" class="delete-button">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteTodo(id) {
      this.$emit('updateTodos', this.todos.filter(item => item.id !== id));
    }
  }
};
</script>

<style>
.Table {
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

.Table_title th {
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
