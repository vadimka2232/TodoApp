<template>
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
</template>

<script lang='ts'>
import { defineComponent,computed,ref } from 'vue';

interface ComponentProps {
  totalPages:number
  currentPage:number
}


export default defineComponent({
  setup(props:ComponentProps, { emit }) {
    let totalPages  = computed(() => props.totalPages);
    let currentPage = ref(1);

    function changePage(page:number) {
      if (page >= 1 && page <= totalPages.value) {
        emit('changePage', page);
      }
    };
  }
});
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
