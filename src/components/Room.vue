<template>
  <div>
    <h3>Empty room...</h3>
    <img src="../assets/empty.jpg" alt="" width="500">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goToRoom () {
      console.log('its a trap!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.room {
  padding: 50px;
}
</style>
