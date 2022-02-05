<template>
    <div id="time_schedule">
        <h1>Time Schedule</h1>
        <div v-if="current">
            <h2>{{ current.toLocaleTimeString() }}</h2>
            <h2>{{ schedule[period_index].name }}</h2>
        </div>
        <div v-else>
            <h2>XX:XX:XX AM</h2>
        </div>
    </div>
</template>

<script>
function timeToSeconds(time) {
    let [hours, minutes, seconds, half] = time.split(/[\:\ ]/);

    if (half == "PM") {
        hours = Number(hours) + 12;
    }

    seconds = Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600;
    return seconds;
}
function get_current_period(current_seconds, schedule) {
    for (let i = 0; i < schedule.length; i++) {
        const period = schedule[i];
        if (current_seconds < timeToSeconds(period.end)) {
            return i;
        }
    }
}

export default {
    name: "TimeSchedule",
    data() {
        return {
            interval: null,
            current: null,
            period_index: null,
            schedule: [
                {
                    start: "00:00:00",
                    end: "7:59:59",
                    name: "Before School",
                },
                {
                    start: "08:00:00",
                    end: "08:39:59",
                    name: "Period 1",
                },
                {
                    start: "08:41:00",
                    end: "08:44:59",
                    name: "Periods 1-2 Passing",
                },
                {
                    start: "08:45:00",
                    end: "09:25:59",
                    name: "Period 2",
                },
                {
                    start: "09:26:00",
                    end: "09:30:59",
                    name: "Periods 2-3 Passing",
                },
                {
                    start: "09:31:00",
                    end: "10:14:59",
                    name: "Period 3",
                },
                {
                    start: "10:15:00",
                    end: "10:19:59",
                    name: "Periods 3-4 Passing",
                },
                {
                    start: "10:20:00",
                    end: "11:00:59",
                    name: "Period 4",
                },
                {
                    start: "11:01:00",
                    end: "11:05:59",
                    name: "Periods 4-5 Passing",
                },
                {
                    start: "11:06:00",
                    end: "11:46:59",
                    name: "Period 5",
                },
                {
                    start: "11:47:00",
                    end: "11:51:59",
                    name: "Periods 5-6 Passing",
                },
                {
                    start: "11:52:00",
                    end: "12:32:59",
                    name: "Period 6",
                },
                {
                    start: "12:33:00",
                    end: "12:37:59",
                    name: "Periods 6-7 Passing",
                },
                {
                    start: "12:38:00",
                    end: "13:18:59",
                    name: "Period 7",
                },
                {
                    start: "13:19:00",
                    end: "13:23:59",
                    name: "Periods 7-8 Passing",
                },
                {
                    start: "13:24:00",
                    end: "14:04:59",
                    name: "Period 8",
                },
                {
                    start: "14:05:00",
                    end: "14:08:59",
                    name: "Periods 8-9 Passing",
                },
                {
                    start: "14:09:00",
                    end: "14:49:59",
                    name: "Period 9",
                },
                {
                    start: "14:50:00",
                    end: "14:53:59",
                    name: "Periods 9-10 Passing",
                },
                {
                    start: "14:54:00",
                    end: "15:34:59",
                    name: "Period 10",
                },
                {
                    start: "15:35:00",
                    end: "23:59:59",
                    name: "After School",
                },
            ],
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
            this.period_index = get_current_period(
                current_seconds,
                this.schedule
            );
        },
    },
};
</script>

<style scoped>
#time_schedule {
    width: 100%;
    height: 100%;
    /* border: 1px solid black; */
}
</style>
