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
  data() {
    return {
      show: false,
      index: null,
      text: null,
      activitycard: false,
      activity_type: null,
    };
  },
  created() {
    this.types = {
      Hydrate: [
        "Similar to flowers and plants, water helps us grow. Habe you watered yourself today?",
        "Cacti are more hydrated than the soil they grow in. Absorb tiny sponges!",
        "Water is essential to all living organisms on earth. Even you, tiny human.",
      ],
      Breathe: [
        "Breathe in for 4, hold for 4 and exhale for 4. This too shall pass.",
        "Just breathe. Become aware of any tension in your body. Now unclench your jaw, relax your shoulders and let them drop slowly ",
        "Breathe in through your nose for 4 seconds, hold for 4 and release for 4. Repeat as needed",
      ],
    };
  },

  methods: {
    toggleType() {
      this.show = !this.show;
    },
    updateText(type, id) {
      console.log(this.types);
      this.index = id;
      this.text = this.types[type][id];
      this.activity_type = type;
    },
    toggle() {
      console.log("pressed");
      this.activitycard = !this.activitycard;
    },
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
