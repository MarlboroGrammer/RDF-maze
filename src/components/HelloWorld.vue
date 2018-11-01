<!-- eslint-disable -->
<template>
  <div>
    <div v-if="treasureFound">
      <h2>Hooray! you won@</h2>
      <img src="../assets/treasure.jpg" alt="" width="500">
    </div>
    <div v-if="lifes === 0">
      <h2>Game over!</h2>
      <p>(Refresh the page to play again!)</p>
    </div>
    <div v-if="lifes > 0 && !treasureFound">
      <h1>RDF Maze</h1>
      Find the treasure! (You have {{lifes}} left)
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <table border="2">
              <tr v-for="i in Math.ceil(maze.length / 4)" :key="i">
                <td v-for="m in maze.slice((i - 1) * 4, i * 4)">
                  <a href="#" @click="goToRoom(m)">
                    <div class="room" :id="m"></div>
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div class="col-md-7">
            <div :is="current">
              Your goal is to find the treasure! Find the room that has it.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Room from '@/components/Room'
import Trap from '@/components/Trap'
import Quiz from '@/components/Quiz'
import store from '@/store/store'

export default {
  name: 'HelloWorld',
  data () {
    return {
      size: 13,
      trapCount: 4,
      quizCount: 3,
      treasureFound: false,
      currentQuiz: '',
      maze: [],
      current: '',
      lifes: store.getters.getLifes
    }
  },
  methods: {
    getRoomType (type) {
      if (type.search('ROOM') !== -1) {
        return 'ROOM'
      }
      if (type.search('TRAP') !== -1) {
        return 'TRAP'
      }
      if (type.search('TREASURE') !== -1) {
        return 'TREASURE'
      }
      if (type.search('QUIZ') !== -1) {
        return 'QUIZ'
      }
    },
    goToRoom (type) {
      switch (this.getRoomType(type)) {
        case 'ROOM':
          this.current = Room
          document.getElementById(type).style.backgroundColor = 'yellow'
          break
        case 'TRAP':
          this.current = Trap
          document.getElementById(type).style.backgroundColor = 'red'
          store.dispatch('takeLife')
          this.lifes = store.getters.getLifes
          break
        case 'QUIZ':
          store.dispatch('setQuiz')
          store.dispatch('setQuizId', type)
          this.current = Quiz
          document.getElementById(type).style.backgroundColor = 'yellow'
          this.currentQuiz = type
          break;
        case 'TREASURE':
          store.dispatch('setQuiz')
          this.treasureFound = true
      }
    }
  },
  beforeMount: function () {
    let visited = []
    this.maze = ['ROOM1', 'ROOM2', 'ROOM3', 'ROOM4', 
                 'ROOM5', 'ROOM6', 'ROOM7', 'ROOM8', 
                 'ROOM9', 'ROOM10', 'ROOM11', 'ROOM12']
    let trapsSet = 0
    let quizSet = 0
    let index = Math.floor((Math.random() * 12))
    // Set one treasure
    if (!this.maze.includes('TREASURE') && !visited.includes(index)) {
      this.maze[index] = `TREASURE${index}` 
      visited.push(index)
    }
    // set traps. make sure they are set once and randomly
    while (trapsSet < this.trapCount) {
      index = Math.floor((Math.random() * 12))
      if (!visited.includes(index)) {
        this.maze[index] = `TRAP${index}`
        visited.push(index)
        trapsSet++
      }
    }
    //set some quizes
    while (quizSet < this.quizCount) {
      index = Math.floor((Math.random() * 12))
      if (!visited.includes(index)) {
        this.maze[index] = `QUIZ${index}`
        visited.push(index)
        quizSet++
      }
    }
    console.log(this.maze.indexOf(null), ...this.maze, ...visited, "Length: " + this.maze.length)
  },
  updated: function () {
    store.subscribe((mutation, state) => {
      if (mutation.payload === true) {
        document.getElementById(this.currentQuiz).style.backgroundColor = 'green'
      }
      this.lifes = state.lifes
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.room {
  padding: 50px;
}
</style>
