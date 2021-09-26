<template>
  <div class="activity-card">
    <mini-header title="ACTIVITY TYPE"></mini-header>
    <div class="pick-activity">
      <div class="activity-container">
        <div class="icon"></div>
        <span class="activity-name">{{ activity }}</span>
      </div>
      <span class="next">next</span>
    </div>
    <span class="line"></span>
    <mini-header title="ROUTINE"></mini-header>
    <span class="text btn">Add a reminder</span>
    <span class="line"></span>
    <span class="text reminder">
      Beware of noticication fatigue! Set reminders intentionally and sparingly
      for most effective results. 🐝
    </span>
    <mini-header title="REMINDER"></mini-header>
    <span class="text"
      >You gotta nourish to flourish! Water yourself soon.
    </span>
    <span class="line"></span>
    <mini-header title="PREMUIM"></mini-header>
  </div>
</template>

<script>
import MiniHeader from "./MiniHeader.vue";
export default {
  name: "ActivityCard",
  props: {
    activity: String,
  },
  components: {
    MiniHeader,
  },
};
</script>

<style scoped>
.activity-card {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 3;
  display: flex;
  flex-direction: column;
}

.pick-activity {
  display: flex;
  justify-content: space-between;
}

.activity-container {
  display: flex;
}

.icon {
  height: 50px;
  width: 50px;
  border-radius: 7px;
  background-color: rgb(30, 122, 145);
  margin-left: 10px;
  margin-right: 15px;
}

.activity-name {
  margin-top: 15px;
  font-size: 16px;
  color: blue;
  font-weight: bold;
}

.next {
  margin-top: 15px;
  margin-right: 10px;
}

.line {
  height: 1px;
  width: 100%;
  background-color: rgb(226, 226, 226);
  margin-top: 10px;
  margin-bottom: 10px;
}

.text {
  margin-left: 10px;
  margin-right: 10px;
}

.reminder {
  font-size: 12px;
  color: rgb(128, 128, 128);
}

.btn {
  color: blue;
}
</style>
