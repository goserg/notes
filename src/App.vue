<template>
  <div id="app">
    <Button
      float_top
      float_right
      color_main
      @click="$store.commit('add')"
    >
      + New note
    </Button>
    <Note
      v-for="(note, i) in $store.state.notes"
      :key="note + i"
      :text="note"
      @del="$store.commit('del', i)"
      @change="change($event, i)"
    >
    </Note>
  </div>
</template>

<script>
import Note from './components/Note'
import Button from './components/Button'
export default {
  name: 'App',
  components: {
    Note,
    Button
  },
  methods: {
    change (e, i) {
      this.$store.commit('change', {
        text: e,
        index: i
        }
      )
    }
  },
  mounted () {
    this.$store.commit('loadNotes')
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #7BDAF3;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 3rem;
}
</style>
