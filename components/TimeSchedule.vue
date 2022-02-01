<template>
    <div id="time_schedule">
        <h1>Time Schedule</h1>
        <h2 v-if="current">{{ current.toLocaleTimeString() }}</h2>
        <h2 v-else>XX:XX:XX AM</h2>
    </div>
</template>

<script>
export default {
    name: "TimeSchedule",
    data() {
        return {
            interval: null,
            current: null,
        };
    },
    mounted() {
        this.interval = setInterval(() => {
            this.updateDiffs();
        }, 1000);

        this.updateDiffs();
    },
    destroyed() {
        clearInterval(this.interval);
    },

    methods: {
        updateDiffs() {
            this.current = new Date();
        },
    },
};
</script>

<style scoped>
#time_schedule {
    width: 100%;
    height: 100%;
    border: 1px solid black;
}
</style>
