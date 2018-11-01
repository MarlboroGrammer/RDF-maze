import Vue from 'vue'
import Vuex from 'vuex'
// import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  state: {
    lifes: 3,
    quiz: 0,
    isRight: false,
    quizID: ''
  },
  mutations: {
    takeLife (state) {
      if (state.lifes > 0) {
        state.lifes -= 1
      }
    },
    setQuiz (state) {
      state.quiz = Math.floor(Math.random() * 4) + 1
    },
    setQuizId (state, id) {
      state.quizID = id
    },
    setAnswer (state, result) {
      state.isRight = result
    }
  },
  getters: {
    getLifes (state) {
      return state.lifes
    },
    getQuiz (state) {
      return state.quiz
    },
    getAnswer (state) {
      return state.isRight
    },
    getQuizId (state) {
      return state.quizID
    }
  },
  actions: {
    takeLife ({commit}) {
      commit('takeLife')
    },
    setQuiz ({commit}) {
      commit('setQuiz')
    },
    setAnswer ({commit}, result) {
      commit('setAnswer', result)
    },
    setQuizId ({commit}, id) {
      commit('setQuizId', id)
    }
  }
})
