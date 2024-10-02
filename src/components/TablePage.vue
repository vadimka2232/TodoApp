<template>

  <div class="Table">
    <table border="1">
      <thead>
        <tr class="Table_title">
          <th>ID</th>
          <th>Todo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in todos" :key="item.id" class="tr-item">
          <td class="tr-id">{{ item.id }}</td>
          <td>{{ item.todo }}</td>
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
  }
};
</script>

<style>
 .Table {
  display: flex;
  justify-content: center ;
  }


table td, table th {
  padding: 8px; /* Добавляем отступы для всех ячеек */
}

table td:first-child, table th:first-child{
  width: 40px; /* Фиксированная ширина для колонки с ID */
  text-align: left; /* Выровняем текст по правому краю */
}

table td {
  text-align: left; /* Выровняем текст в остальных ячейках по левому краю */
  border-bottom: 1px solid rgb(78, 76, 76); /* Линия под заголовками */
}

.Table_title th {
  border-bottom: 2px solid black; /* Линия под заголовками */
  padding-bottom: 8px; /* Отступ снизу заголовка */
  text-align: left; /* Выровняем текст по левому краю */
}
</style>