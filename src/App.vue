<template>
  <div class="container">
    <header class="header">
      <TitleComp msg="Todo"/>
      <TitleComp msg="Profiles"/>
    </header>
    <main class="main">
      <TableComp />
    </main>

  </div>
</template>

<script>

import './normalize.css'
import TitleComp from './components/TitleComp.vue'
import TableComp from './components/TableComp.vue'  
export default {
  name: 'App',
  components: { 
    TitleComp,
    TableComp
  }
}
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
.header:hover{
  cursor: pointer;
}

.main {
margin: 20px 0;
}
</style>
