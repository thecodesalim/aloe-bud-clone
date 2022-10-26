import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    activities: [
      {
        id: 1,
        activity: "HYDRATE",
        time: "a while ago",
        text:
          "Breathe in for 4, hold foor 4 and exhale for 4. This too shall pass.",
        icon: "https://img.icons8.com/fluency/48/000000/pixel-heart.png",
      },
      {
        id: 2,
        activity: "MOVE",
        time: "this week",
        text:
          "Breathe in for 4, hold foor 4 and exhale for 4. This too shall pass.",
        icon: "https://img.icons8.com/ios/50/000000/pixel-cat.png",
      },
      {
        id: 3,
        activity: "MOTIVATE",
        time: "never",
        text:
          "Breathe in for 4, hold foor 4 and exhale for 4. This too shall pass.",
        icon: "https://img.icons8.com/fluency/48/000000/pixel-heart.png",
      },
      {
        id: 4,
        activity: "MOTIVATE",
        time: "never",
        text:
          "Breathe in for 4, hold foor 4 and exhale for 4. This too shall pass.",
        icon: "https://img.icons8.com/fluency/48/000000/pixel-heart.png",
      },
    ],
    types: {
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
    },
  }),
  getters: {
    length() {
      return this.activities.length;
    },
  },
  actions: {
    add(activity) {
      this.activities = this.activities.concat(activity);
    },
  },
});
