<template>
  <div>
    <h2>You died! x(</h2>
    <img src="../assets/ded.jpg" alt="" width="250">
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
