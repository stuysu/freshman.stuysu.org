<template>
    <div id="time_schedule">
        <h1>Time Schedule</h1>
        <div v-if="current">
            <h2>{{ schedule[period_index].name }}</h2>
            <div>
                <h2>
                    {{
                        time_elapsed.hours > 0
                            ? time_elapsed.hours + " hours and"
                            : ""
                    }}
                    {{ time_elapsed.minutes + " minutes elapsed" }}
                </h2>
                <h2>
                    {{
                        time_remaining.hours > 0
                            ? time_remaining.hours + " hours and"
                            : ""
                    }}
                    {{
                        Number(Number(time_remaining.minutes) + 1) +
                        " minutes remaining"
                    }}
                </h2>
            </div>
        </div>
        <div v-else>
            <h2>XX:XX:XX AM</h2>
        </div>
        <div id="time_table_container">
            <table id="time_table">
                <tbody>
                    <tr
                        v-for="period in periods_only"
                        :key="period.name"
                        v-bind:class="
                            period_index &&
                            period.name == schedule[period_index].name
                                ? 'current_period'
                                : ''
                        "
                    >
                        <td>{{ period.name }}</td>
                        <td>{{ period.start }}</td>
                        <td>{{ period.end }}</td>
                    </tr>
                </tbody>
            </table>
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

function secondsToUnits(s) {
    const hours = Math.floor(s / 3600);
    let left = Number(s % 3600);
    const minutes = Math.floor(left / 60);
    const seconds = left % 60;
    return { hours, minutes, seconds };
}

export default {
    name: "TimeSchedule",
    props: {
        schedule: {
            type: Array,
        },
    },
    data() {
        return {
            interval: null,
            time_elapsed: null,
            time_remaining: null,
            current: null,
            period_index: null,
            periods_only: this.schedule.filter(
                (v) => !v.name.includes("Passing")
            ),
        };
    },
    mounted() {
        this.interval = setInterval(() => {
            this.updateDiffs();
        }, 1000);

        this.updateDiffs();
        console.log(JSON.parse(JSON.stringify(this.periods_only)));
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

            // Get current "place" in the schedule
            this.period_index = get_current_period(
                current_seconds,
                this.schedule
            );

            // Calculate time elapsed/remaining
            const seconds_elapsed =
                current_seconds -
                timeToSeconds(this.schedule[this.period_index].start);
            const seconds_remaining =
                timeToSeconds(this.schedule[this.period_index].end) -
                current_seconds;

            this.time_elapsed = secondsToUnits(seconds_elapsed);
            this.time_remaining = secondsToUnits(seconds_remaining);
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
#time_table {
    border: 1px solid black;
    width: 100%;
}
#time_table,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

.current_period {
    background-color: #cbcddf;
}
</style>
