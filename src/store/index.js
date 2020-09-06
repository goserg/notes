import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: ["note1", "note2", "note3"]
  },
  mutations: {
    loadNotes (state) {
      state.notes = JSON.parse(localStorage.getItem('notes'))
    },
    del (state, i) {
      delete state.notes[i];
      state.notes = state.notes.filter(function(element) {
          return element != undefined
      });
    },
    add (state) {
      state.notes = [""].concat(state.notes)
      let serialNotes = JSON.stringify(state.notes)
      localStorage.setItem('notes', serialNotes)
    },
    change (state, data) {
      state.notes[data.index] = data.text
      let serialNotes = JSON.stringify(state.notes)
      localStorage.setItem('notes', serialNotes)
    }
  },
  actions: {
  },
  modules: {
  }
})
