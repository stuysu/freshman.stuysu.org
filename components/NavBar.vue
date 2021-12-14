<template>
    <nav>
        <NuxtLink to="/policies">The Policies</NuxtLink>
        <NuxtLink to="/" id="title">Andy + Fin Caucus</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
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

#title {
    font-size: 24px;
}
nav * {
    margin-right: 20px;
    margin-left: 20px;
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
