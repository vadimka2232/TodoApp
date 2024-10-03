<template>
  <div class="profiles-container">
    <h1>User Profiles</h1>
    <ul>
      <li
        v-for="profile in profiles"
        :key="profile.userId"
        class="profile-item"
      >
        <strong>Name: </strong> {{ profile.name }} <br />
        <button @click="selectProfile(profile)" class="select-button">Выбрать профиль</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
// import profilesMass from '../../public/profiles/profiles.json'; 

export default defineComponent({
  setup(props: any, { emit }) {
    const profiles = ref<any>([]);

    function selectProfile(profile: any): void {
      emit('selectProfile', profile);
    }

    return {
      profiles,
      selectProfile
    };
  }
});
</script>

<style scoped>
.item-profile {
  font-weight: 800;
}
</style>
