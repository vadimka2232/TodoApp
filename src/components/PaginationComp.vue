<template>
  <div>
    <TablePage :todos="paginatedTodos" @updateTodos="updateTodos" />

    <div class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import TablePage from './TablePage.vue';

export default {
  components: {
    TablePage
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 15,
      localTodos: []
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.localTodos.length / this.itemsPerPage);
    },
    paginatedTodos() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.localTodos.slice(start, end);
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    updateTodos(newTodos) {
      this.localTodos = newTodos;

      this.$emit('updateTodos', newTodos);
    }
  },
  watch: {
    todos: {
      immediate: true,
      handler(newTodos) {
        this.localTodos = [...newTodos];
      }
    }
  }
};
</script>

<style>
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
}

.pagination button.active {
  background-color: #859db6;
  color: white;
}

.pagination button:hover {
  background-color: #e0e0e0;
}
</style>