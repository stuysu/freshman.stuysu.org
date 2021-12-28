<template>
    <div class="policy">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <p>{{ why }}</p>
    </div>
</template>

<script>
export default {
    name: "Policy",
    props: ["name", "description", "why"],
    mounted() {
        console.log(this.name, this.description, this.why);
    },
};
</script>
<style scoped>
p {
    font-size: 1.2rem;
}
</style>
