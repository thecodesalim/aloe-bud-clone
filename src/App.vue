<template>
  <Header></Header>
  <div class="items">
    <item
      v-for="item in main.activities"
      v-bind:activity="item.activity"
      v-bind:time="item.time"
      v-bind:icon="item.icon"
      v-bind:key="item.id"
    ></item>
    <button
      @click="
        main.add({
          id: 3,
          activity: 'ERICA',
          time: 'never',
          text:
            'Breathe in for 4, hold foor 4 and exhale for 4. This too shall pass.',
          icon: 'https://img.icons8.com/fluency/48/000000/pixel-heart.png',
        })
      "
    >
      add
    </button>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Item from "./components/Item.vue";
import { useMainStore } from "./store/main";

export default {
  name: "App",
  components: {
    Header,
    Item,
  },
  setup() {
    const main = useMainStore();
    return { main };
  },
};
</script>

<style>
html,
body {
  background-color: #74c9c8;
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: monospace;
  padding: 0px;
  width: 100%;
  height: 100%;
}

.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
}
</style>
