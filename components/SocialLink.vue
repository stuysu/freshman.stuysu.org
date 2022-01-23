<template>
    <div class="social" :style="theme">
        <a :href="url" target="_blank">
            <nuxt-img class="social_logo" :src="logo" :alt="logo_alt" />
            {{ flavor }}
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialLink",
    props: ["flavor", "url", "logo", "logo_alt", "theme"],
};
</script>

<style scoped>
.social {
    color: black;
    box-shadow: 10px 5px 5px rgb(209, 209, 209), 0 -2px 5px rgb(209, 209, 209);
    border-radius: 30px;
    margin: 2vh auto;
    padding: 16px;
    width: 50vw;
    text-align: center;
    align-content: center;
    /* background-color: rgb(247, 247, 247); */
    transition: 0.5s;
}

.social:hover {
    background: var(--color);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    transform: translateX(1vw);
}

.social a {
    color: inherit;
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 0;
    text-decoration: none;
}

.social:hover a {
    color: white; /* if inherited, has a delay in color change */
}

.social:hover img {
    filter: invert(1);
}

.social_logo {
    height: 32px;
    padding-right: 12px;
    vertical-align: middle;
}
</style>
