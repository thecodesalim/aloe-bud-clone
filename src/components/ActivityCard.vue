<template>
  <div class="activity-card">
    <div class="header">
      <i class="fas fa-times"></i>
      <span class="name">Activity card</span>
      <i class="fas fa-check" @click="addActivity(activity)"></i>
    </div>
    <mini-header title="ACTIVITY TYPE"></mini-header>
    <div class="pick-activity">
      <div class="activity-container">
        <div class="icon"></div>
        <span class="activity-name">{{ activity }}</span>
      </div>
      <span class="next"><i class="fas fa-greater-than"></i></span>
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
import { useMainStore } from "../store/main";
export default {
  name: "ActivityCard",
  components: {
    MiniHeader,
  },
  props: {
    activity: String,
  },
  setup() {
    const main = useMainStore();
    console.log("first", main.length);
    const addActivity = (activity) => {
      main.add(
        main.activities.filter((i) => i.activity === activity.toUpperCase())[0]
      );
      console.log("activities", main.activities);
    };

    return {
      addActivity,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  color: blue;
}

.name {
  text-decoration: underline;
  font-style: italic;
}
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
  color: rgb(226, 226, 226);
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
