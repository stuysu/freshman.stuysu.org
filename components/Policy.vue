<template>
    <div class="policy">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <p>Why: {{ why }}</p>
        <p>How: {{ how }}</p>
    </div>
</template>

<script>
export default {
    name: "Policy",
    props: ["name", "description", "why", "how"],
    mounted() {
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
