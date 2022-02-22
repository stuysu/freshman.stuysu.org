<template>
    <div>
        <h1 id="red_title">Weekly Schedule</h1>
        <div id="day_table">
            <div v-for="day in days" :key="day.date" class="day">
                <h3>
                    {{
                        [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                        ][new Date(day.date).getDay() - 1]
                    }}
                </h3>
                <h3>{{ day.date }}</h3>
                <p>{{ day.bell_schedule_type }} Bell</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Week",
    props: ["days"],
    mounted() {
        console.log("In week,", this.days);
    },
};
</script>

<style scoped>
.light_mode #red_title {
    color: #b22222;
}
.dark_mode #red_title {
    color: rgb(219, 67, 67);
}

#day_table {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.day {
    height: 75px;
    width: 150px;
}
</style>
