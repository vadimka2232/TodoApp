import { defineStore } from "pinia";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoStoreState {
  todos: Todo[]; 
}

export const useTodoStore = defineStore("todos", {
  state(): TodoStoreState {
    return {
      todos: [] 
    };
  },
  getters: {
    completed(state): Todo[] {
      return state.todos.filter((item) => item.completed); 
    },
  }

});
