<template>
  <div class="container">
    <header class="header">
      <h1>Profiles</h1>
      <h1>Todo</h1>
    </header>
    <main class="main">
      <component 
        :is="activeComponent" 
        :selectedProfile="selectedProfile" 
        @selectProfile="setSelectedProfile" 
      />
    </main>
  </div>
</template>

<script>
import './normalize.css';
import TitleComp from './components/TitleComp.vue';
import TableComp from './components/TableComp.vue';
import ProfilesComp from './components/UserProfiles.vue';

export default {
  name: 'App',
  components: { 
    TitleComp,
    TableComp,
    ProfilesComp,
  },
  data() {
    return {
      selectedProfile: null, // Реактивная переменная для хранения выбранного профиля
      activeComponent: 'ProfilesComp', // Переменная для хранения текущего активного компонента
    };
  },
  methods: {
    setSelectedProfile(profile) {
      this.selectedProfile = {userId:profile.userId}; // Устанавливаем выбранный профиль
      console.log(this.selectedProfile);
      
    },
    setActiveComponent(component) {
      this.activeComponent = component === 'profiles' ? 'ProfilesComp' : 'TableComp'; // Устанавливаем активный компонент
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 100wh;
  margin: 0 auto;
  height: 100vh;
  background-color: #859db6;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 30px 0 0 0;
}

.header:hover {
  cursor: pointer;
}

.main {
  margin: 20px 0;
}
</style>
