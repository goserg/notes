<template>
  <div class="note">
    <div class="head">
      <Button
        stick_right
        @click="$emit('del')"
      >
        <svg class="delete" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </Button>
    </div>
    <textarea
      v-model="text"
      @change="$emit('change', text)"
    >
    </textarea>
  </div>
</template>

<script>
import Button from '../components/Button'
export default {
  props: {
    text: String
  },
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
  .note {
    width: 20rem;
    height: 20rem;
    background: linear-gradient(45deg, white, #d2fcf0);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    margin: 2rem;
    color: #8f8f8f;
    font-size: 1.5rem;
    .head {
      display: flex;
      padding: 0.3rem;
      .delete {
        height: 2rem;
        width: 2rem;
      }
    }
    textarea {
      width: 100%;
      height: calc(100% - 2.5rem);
      resize: none;
      border: 0;
      outline: 0;
      padding: 0.5rem;
      background: linear-gradient(45deg, white, #d2fcf0);
      color: #8f8f8f;
      font-size: 1.5rem;
    }
  }
</style>
