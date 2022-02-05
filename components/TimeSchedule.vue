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
function get_current_period(current_seconds) {
    for (let i = 0; i < schedule.length; i++) {
        const period = schedule[i];
        if (current_seconds < timeToSeconds(period.end)) {
            return i;
        }
    }
}
const schedule = [
    {
        start: "00:00:00",
        end: "7:59:59",
        name: "Before School",
    },
    {
        start: "8:00:00",
        end: "23:59:59",
        name: "After School",
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
            const period = get_current_period(current_seconds);
            console.log("Current period:", period);
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
