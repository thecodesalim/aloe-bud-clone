<template>
  <div class="card">
    <div class="content" @click="toggleType">
      <span>Hydrate</span>
      <span>drop</span>
    </div>
    <div class="type" v-if="show">
      <div class="icons">
        <img
          src="https://img.icons8.com/color/80/000000/minecraft-diamond.png"
        />
        <img src="https://img.icons8.com/color/80/000000/minecraft-axe.png" />
        <img
          src="https://img.icons8.com/officel/80/000000/minecraft-shovel.png"
        />
      </div>
      <div class="switch">
        <button class="btn-switch checkin">Check in</button>
        <button class="btn-switch reflect">Reflection</button>
      </div>
      <p class="question">
        Similar to flowers and plants, water helps us grow. Have you watered
        yourself today?
      </p>
      <button class="btn-activity">SET ACTIVITY</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActivityItem",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleType() {
      console.log("type");
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
}

.type {
  display: flex;
  flex-direction: column;
  background-color: #47a3a2;
}

.icons {
  display: flex;
  justify-content: space-around;
}

.switch {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #225554;
}

.btn-switch {
  background-color: #fff;
  border: none;
  margin-right: 2px;
  border-radius: 2px;
  font-size: 11px;
}

.question {
  margin-left: 10px;
  margin-right: 10px;
  color: blue;
}
.btn-activity {
  align-self: center;
  border: none;
  background-color: rgb(89, 0, 255);
  width: 300px;
  height: 40px;
  color: #fff;
  font-style: italic;
  border-radius: 5px;
  margin-bottom: 30px;
}
</style>
