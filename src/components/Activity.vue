<template>
  <activity-card v-if="activitycard"></activity-card>
  <div class="activity">
    <div class="header">
      <span @click="$emit('back')">back</span>
      <span class="heading">New</span>
      <span></span>
    </div>
    <span class="title">CHOOSE YOUR ACTIVITY</span>
    <span class="line"></span>
    <ActivityItem @open-activity-card="toggleActivityCard" activity="Hydrate">
    </ActivityItem>
    <ActivityItem activity="Breathe"></ActivityItem>
  </div>
</template>
<script>
import ActivityItem from "./ActivityItem.vue";
import ActivityCard from "./ActivityCard.vue";
export default {
  name: "Activity",
  components: {
    ActivityItem,
    ActivityCard,
  },
  data() {
    return {
      activitycard: false,
    };
  },
  methods: {
    toggleActivityCard() {
      console.log("activity-card");
      this.activitycard = !this.activitycard;
    },
  },
};
</script>
<style scoped>
.activity {
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

.heading {
  font-style: italic;
  text-decoration: underline;
}

.title {
  margin-top: 30px;
  margin-left: 10px;
  align-self: flex-start;
}

.line {
  height: 1px;
  width: 100%;
  background-color: rgb(226, 226, 226);
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
