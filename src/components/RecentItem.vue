<template>
    <div class="recent-item">
        <div class="item">
            <div class="icon">
                <img src="https://img.icons8.com/fluency/24/000000/pixel-heart.png"/>
            </div>
            <span class="text">Breathe</span>
        </div>
        <span class="time">00:50</span>
    </div>
</template>

<script>
export default {
    name: "RecentItem"
}
</script>
<style scoped>
.recent-item {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.item {
    display: flex;
}
.icon {
    border-radius: 50px;
    margin-right: 10px;
}
.time {
    font-size: 10px;
    color: blue;
}

.text {
    font-size: 16px;
    color: #202020;
}
</style>