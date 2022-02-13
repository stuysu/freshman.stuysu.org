<template>
    <div id="main_content_holder">
        <div id="main_content">
            <h1 id="main_content_title">Main Content</h1>
            <div id="timeschedule_container">
                <TimeSchedule
                    :schedule="schedule"
                    :bell_schedule_type="bell_schedule_type"
                />
            </div>
            <div id="week_container"><Week :days="days" /></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        schedule: {
            type: Array,
        },
        bell_schedule_type: {
            type: String,
        },
        days: {
            type: Array,
        },
    },
    mounted() {},
    data() {
        return {};
    },
};
</script>
<style scoped>
#main_content {
    width: 95%;
    min-height: 80vh;
    margin: auto;
    text-align: center;
}
#main_content_title {
    color: black;
    font-size: 1.8rem;
}
#timeschedule_container {
    width: 100%;
}
#week_container {
    margin-top: 15px;
    width: 100%;
}
</style>
