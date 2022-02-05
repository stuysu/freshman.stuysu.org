<template>
    <div id="time_schedule">
        <h1>Time Schedule</h1>
        <h2 v-if="current">{{ current.toLocaleTimeString() }}</h2>
        <h2 v-else>XX:XX:XX AM</h2>
    </div>
</template>

<script>
function timeToSeconds(time) {
    let [hours, minutes, seconds, half] = time.split(/[\:\ ]/);

    if (half == "PM") {
        hours = Number(hours) + 12;
    }
    // console.log({ hours, minutes, seconds, half });

    seconds = Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600;
    return seconds;
}
const schedule = [
    {
        start: "00:00:00",
        end: "7:59:59",
    },
];
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
            const current_seconds = timeToSeconds(
                this.current.toLocaleTimeString()
            );
            // console.log("Current seconds: ", current_seconds);
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
