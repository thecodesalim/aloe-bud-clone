<template>
  <div class="header">
    <Recents @back="toggleRecents" v-if="recents"></Recents>
    <Activity @back="toggleActivity" v-if="activity"></Activity>
    <div @click="toggleActivity">Add</div>
    <div @click="toggleRecents">Recent</div>
    <div>Settings</div>
  </div>
</template>

<script>
import Recents from "./Recents.vue";
import Activity from "./Activity.vue";

export default {
  name: "Header",
  components: {
    Recents,
    Activity,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      recents: false,
      activity: false,
    };
  },
  methods: {
    toggleRecents() {
      this.recents = !this.recents;
    },
    toggleActivity() {
      console.log("activity");
      this.activity = !this.activity;
    },
  },
  emits: ["back"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
}
</style>
