<template>
  <div class="recents">
    <div class="header">
      <span @click="$emit('back')">back</span>
      <span class="title">Recents</span>
      <span></span>
    </div>
    <span class="date">Thu 16 Sept</span>
    <RecentItem></RecentItem>
    <RecentItem></RecentItem>
    <RecentItem></RecentItem>
  </div>
</template>

<script>
import RecentItem from "./RecentItem.vue";
export default {
  name: "Recents",
  components: {
    RecentItem,
  },
  emits: ["back"],
};
</script>

<style scoped>
.recents {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  color: blue;
}

.title {
  font-style: italic;
  text-decoration: underline;
}
.date {
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  color: blue;
}
</style>
