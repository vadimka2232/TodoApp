import { defineStore } from "pinia";

export interface User {
    userId: number;
    name: string;
    email: string;
    age: number;
    location: string;
    selected : boolean;
}

export interface UsersState {
    users: User[]; 
}

export const useTodoStore = defineStore("todos", {
  state(): UsersState {
    return {
        users: [] 
    };
  },
  getters: {
    selected(state): User | undefined {
      return state.users.find((item) => item.selected); 
    },
  },
  actions: {
    async select(id:number) {
        this.users = this.users.map(user => {
            user.selected = false;
            return user;
        });
        const user = this.users.find((user) => user.id === id); 
        if (user){
        user.selected = true
        };
    },
  },

});
