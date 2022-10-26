<template>
  <div class="mini-header">
    <span class="title">{{ title }}</span>
    <span class="line"></span>
  </div>
</template>
<script>
export default {
  name: "MiniHeader",
  props: {
    title: String,
  },
};
</script>
<style scoped>
.mini-header {
  display: flex;
  flex-direction: column;
}
.title {
  margin-top: 30px;
  margin-left: 10px;
  align-self: flex-start;
  color: rgb(128, 128, 128);
}

.line {
  height: 1px;
  width: 100%;
  background-color: rgb(226, 226, 226);
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
