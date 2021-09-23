<template>
  <Header></Header>
  <div class="items">
    <Item title="BREATHE" time="last week"></Item>
    <Item title="BREATHE" time="last week"></Item>
    <Item title="BREATHE" time="last week"></Item>
    <Item title="BREATHE" time="last week"></Item>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Item from "./components/Item.vue";

export default {
  name: "App",
  components: {
    Header,
    Item,
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
