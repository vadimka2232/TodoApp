<template>
  <div class="profiles-container">
    <h1>User Profiles</h1>
    <ul>
      <li
        v-for="profile in profiles"
        :key="profile.userId"
        :class="['profile-item', { selected: selectedProfile && selectedProfile.userId === profile.userId }]"
      >
        <strong>Name:</strong> {{ profile.name }} <br />
        <button @click="selectProfile(profile)" class="select-button">Выбрать профиль</button>
      </li>
    </ul>
  </div>
</template>

<script>
import profiles from '../../public/profiles/profiles.json'; 

export default {
  props: {
    selectedProfile: Object // Принимаем выбранный профиль из родительского компонента
  },
  data() {
    return {
      profiles: profiles // Импортируем данные профилей
    };
  },
  methods: {
    selectProfile(profile) {
      this.$emit('selectProfile', profile); // Вызываем событие для установки выбранного профиля
    }
  }
};
</script>

<style scoped>
/* Ваши стили */
</style>
