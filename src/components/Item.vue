<template>
    <div class='item' @click="click">
        <div class='icon'>
            <img src="https://img.icons8.com/fluency/48/000000/pixel-heart.png"/>
        </div>     
        <p :style="{fontWeight: 'bold', color: '#202020'}">{{ title }}</p>
        <p :style="{fontSize: '10px', color: '#777777'}">{{ time }}</p>      
    </div>
</template>

<script>

export default ({
  name: 'Item',
  props: {
      title: String,
      time: String
    },
    methods: {
        click() {
            console.log("clicked")
        }
    }
})
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
