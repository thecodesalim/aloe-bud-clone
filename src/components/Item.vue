<template>
  <div class="item" @click="click">
    <div class="icon">
      <img :src="icon" />
    </div>
    <p :style="{ fontWeight: 'bold', color: 'blue' }">{{ activity }}</p>
    <p :style="{ fontSize: '10px', color: '#777777' }">{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    id: Number,
    activity: String,
    time: String,
    icon: String,
    text: String,
  },
  methods: {
    click() {
      console.log("clicked");
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  background-color: #b6e5e3;
  align-items: center;
  border: 1px dashed black;
  border-right: none;
  width: 100px;
  margin-top: 0px;
}
.icon {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
