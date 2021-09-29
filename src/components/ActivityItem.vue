<template>
  <activity-card v-if="activitycard" :activity="activity_type"></activity-card>
  <div class="card">
    <div class="content" @click="toggleType">
      <div class="holder">
        <span>{{ activity }}</span>
        <span>drop</span>
      </div>
      <span class="line"></span>
    </div>
    <div class="type" v-if="show">
      <div class="icons">
        <div
          @click="updateText(activity, 0)"
          :class="index === 0 ? 'selected' : ''"
        >
          <img
            src="https://img.icons8.com/color/80/000000/minecraft-diamond.png"
          />
        </div>
        <div
          @click="updateText(activity, 1)"
          :class="index === 1 ? 'selected' : ''"
        >
          <img
            src="https://img.icons8.com/color/80/000000/minecraft-diamond.png"
          />
        </div>
        <div
          @click="updateText(activity, 2)"
          :class="index === 2 ? 'selected' : ''"
        >
          <img
            src="https://img.icons8.com/color/80/000000/minecraft-diamond.png"
          />
        </div>
      </div>
      <div class="switch">
        <button class="btn-switch checkin">Check in</button>
        <button class="btn-switch reflect">Reflection</button>
      </div>
      <p class="question">
        {{ text }}
      </p>
      <button class="btn-activity" @click="toggle">
        SET ACTIVITY
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useMainStore } from "../store/main";
import Icon from "./Icon.vue";
import ActivityCard from "./ActivityCard.vue";
export default {
  name: "ActivityItem",
  components: {
    Icon,
    ActivityCard,
  },

  props: {
    activity: String,
  },
  setup(props) {
    const main = useMainStore();
    const show = ref(false);
    const index = ref(null);
    const text = ref(null);
    const activitycard = ref(false);
    const activity_type = ref(null);

    const toggleType = () => {
      show.value = !show.value;
    };

    const updateText = (type, id) => {
      index.value = id;
      text.value = main.types[type][id];
      activity_type.value = type;
    };

    const toggle = () => {
      console.log("toggle");
      activitycard.value = !activitycard.value;
    };

    return {
      main,
      show,
      index,
      text,
      activitycard,
      activity_type,
      toggleType,
      updateText,
      toggle,
    };
  },
  emits: ["open-activity-card"],
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
}

.holder {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
}

.type {
  display: flex;
  flex-direction: column;
  background-color: #45b3af;
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
  background-color: #47a3a2;
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

.line {
  height: 1px;
  width: 100%;
  background-color: rgb(226, 226, 226);
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}

.selected {
  background-color: #fff;
}
</style>
