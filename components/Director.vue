<template>
    <div class="parent">
        <div class="director">
            <h2>{{ name }}</h2>
            <h3>{{ role }}</h3>
            <!-- <div class="pfp" /> -->
            <nuxt-img class="pfp" src="/img/default_pfp.jpg" />
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Policy",
    props: ["name", "role"],
    mounted() {
        // console.log(this.name, this.description, this.why);
    },
};
</script>
<style scoped>
.parent {
    width: 100%;
    border: 1px solid rgb(54, 51, 51);
    border-radius: 3%;
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
