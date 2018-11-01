<template>
  <div>
    <h3>Behold, for the hermit is going to test thy knowledge:</h3>
    <img src="../assets/hermit.jpg" alt="" width="200">
    <div v-if="quiz === 1">
      <h4>Who walks on four in the morning, on two the evening, and three at night?</h4>
    </div>
    <div v-if="quiz === 2">
      <h4>It that lights the start, will sleep however</h4>
    </div>
    <div v-if="quiz === 3">
      <h4>How many seasons are in a year?</h4>
    </div>
    <div v-if="quiz === 4">
      <h4>Your mom and wife drown, who do you save first?</h4>
    </div>
    The hermit: <input type="text" v-model="answer">
    <button v-on:click="answerQuiz()">Answer</button>
  </div>
</template>

<script>
/* eslint-disable */
import store from '@/store/store'

export default {
  name: 'Quiz',
  data () {
    return {
      quiz: store.getters.getQuiz,
      answer: '',
      answers: ['human', 'sun', '4', 'silence']
    }
  },
  methods: {
    goToRoom () {
      console.log(this.quiz)
    },
    answerQuiz () {
      console.log(this.answer)
      switch (this.quiz) {
        case 1:
          if (this.answer.toLowerCase().search(this.answers[this.quiz - 1]) !== -1) {
            store.dispatch('setAnswer', true)
            alert('Well done, you may pass')
          }
          else {
            store.dispatch('takeLife')
            alert('Try again!')
          }
        break
        case 2:
          if (this.answer.toLowerCase().search(this.answers[this.quiz - 1]) !== -1) {
            store.dispatch('setAnswer', true)
            alert('Well done, you may pass')
          }
          else {
            store.dispatch('takeLife')
            alert('Try again!')
          }
        break
        case 3:
          if (this.answer.toLowerCase().search(this.answers[this.quiz - 1]) !== -1) {
            store.dispatch('setAnswer', true)
            alert('Well done, you may pass')
          }
          else {
            store.dispatch('takeLife')
            alert('Try again!')
          }
        break
        case 4:
          if (this.answer.toLowerCase().search(this.answers[this.quiz - 1]) !== -1) {
            store.dispatch('setAnswer', true)
            alert('Well done, you may pass')
          }
          else {
            store.dispatch('takeLife')
            alert('Try again!')
          }
        break
      }
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
