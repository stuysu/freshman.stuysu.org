<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <div v-if="why">
            <h3>Why?</h3>
            <p>{{ why }}</p>
        </div>
        <div v-if="how">
            <h3>How?</h3>
            <p>{{ how }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Policy",
    props: ["name", "description", "why", "how"],
    mounted() {
        console.log(this);
        // console.log(this.name, this.description, this.why);
    },
};
</script>
<style scoped>
p {
    font-size: 1.1rem;
}

h2 {
    font-weight: bold;
    text-decoration: underline;
}
</style>
