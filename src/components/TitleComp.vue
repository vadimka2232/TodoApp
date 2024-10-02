<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TitleComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  display:inline-block;
  border-bottom: 1px solid blue;
  border: 1px solid black;
  padding: 5px;
}

</style>
