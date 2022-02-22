<template>
    <div class="parent">
        <div class="director">
            <h2>{{ name }}</h2>
            <h3>{{ role }}</h3>
            <!-- <div class="pfp" /> -->
            <img class="pfp" :src="img_url" :alt="name" />
            <p class="description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Policy",
    props: ["name", "role", "description", "img_url"],

    mounted() {
        // console.log(this.name, this.description, this.why);
    },
};
</script>
<style scoped>
.parent {
    width: 100%;
    border-radius: 3%;
    padding-top: 5px;
    border: 1px solid var(--text-secondary);
}
.director {
    text-align: center;
    padding-left: 8%;
    padding-right: 8%;
}

.pfp {
    height: 200px;
    background-color: grey;
    border-radius: 5%;
}
.description {
    font-size: 13px;
    font-family: monospace;
}
h2 {
    font-size: 23px;
}
</style>
