<template>
    <nav>
        <NuxtLink to="/suggest">Suggestions</NuxtLink>
        <NuxtLink to="/policies">Policies</NuxtLink>
        <NuxtLink to="/" id="title">Andy + Fin Caucus</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/socials">Social Media</NuxtLink>
    </nav>
</template>

<script>
export default {};
</script>
<style scoped>
nav {
    /* background-color: red; */
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center; /* Align center on Y axis */
    justify-content: center; /* Align center on X axis */
}

nav * {
    margin-right: 0.1vw;
    margin-left: 0.1vw;
    width: 15vw;
    text-align: center;
}

#title {
    font-size: 20px;
    width: 200px;
}
a {
    color: var(--text-primary);
}
@media only screen and (max-width: 600px) {
    nav * {
        display: none;
    }

    #title {
        display: block;
    }
}
</style>
