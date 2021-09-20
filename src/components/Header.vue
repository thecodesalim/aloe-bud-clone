<template>
  <div class="header">
    <Recents @back="toggleRecents" v-if="recents"></Recents>
    <div>Add</div>
    <div @click="toggleRecents">Recent</div>
    <div>Settings</div>
  </div>
</template>

<script>
import Recents from "./Recents.vue"
export default {
  name: 'Header',
  components: {
    Recents
  },
  data() {
    return {
      recents: false
    }
  },
  props: {
    msg: String
  },
  methods: {
    toggleRecents() {
      this.recents = !this.recents
    }
  },
  emits: ["back"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
