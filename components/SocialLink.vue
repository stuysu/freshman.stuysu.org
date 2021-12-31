<template>
    <div class="social" :style="theme">
        <a :href="url" target="_blank">
            <nuxt-img class="social_logo" :src="logo" :alt="logo_alt" />
            {{flavor}}
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialLink",
    props: ["flavor", "url", "logo", "logo_alt", "theme"]
}
</script>

<style scoped>


.social {
    border: 1px solid black;
    border-radius: 30px;
    margin: 2vh auto;
    padding: 16px;
    width: 50vw;
    color: black;
    text-align: center;
    align-content: center;
    font-family: "Open Sans";

}

.social:hover {
    transition: 1s;
    transform: translateX(1vw);
    background: var(--color);
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.social:hover a {
    transition: 1s;
    color: white;
}

.social:hover img {
    transition: 1s;
    filter: invert(1);
}

.social_logo {
    height: 32px;
    vertical-align: middle;
    padding-right: 12px;
}

.social a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 0;
}

</style>
