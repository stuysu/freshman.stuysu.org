<template>
    <div>
        <nav id="desktop_nav">
            <NuxtLink to="/suggest">Suggestions</NuxtLink>
            <NuxtLink to="/policies">Policies</NuxtLink>
            <NuxtLink to="/" class="title"><TextLogo /></NuxtLink>
            <NuxtLink to="/about">About Us</NuxtLink>
            <NuxtLink to="/socials">Social Media</NuxtLink>
        </nav>
        <nav id="mobile">
            <div id="top">
                <NuxtLink to="/" class="title"><TextLogo /></NuxtLink>
                <div v-on:click="toggle">
                    <svg
                        id="burger_button"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="384"
                        height="384"
                        viewBox="0 0 24 24"
                        style="fill: #000000"
                    >
                        <path
                            d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div id="dropdown" ref="dropdown">
                <h3><NuxtLink to="/suggest">Suggestions</NuxtLink></h3>
                <h3><NuxtLink to="/policies">Policies</NuxtLink></h3>
                <h3><NuxtLink to="/about">About Us</NuxtLink></h3>
                <h3><NuxtLink to="/socials">Social Media</NuxtLink></h3>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        toggle() {
            const dropdown = this.$refs.dropdown;
            if (
                dropdown.style.display != "" &&
                dropdown.style.display != "none"
            ) {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        },
    },
};
</script>
<style scoped>
#desktop_nav {
    /* background-color: red; */
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center; /* Align center on Y axis */
    justify-content: center; /* Align center on X axis */
}

#desktop_nav * {
    margin-right: 0.1vw;
    margin-left: 0.1vw;
    width: 15vw;
    text-align: center;
}

.title {
    width: 180px !important;
    text-decoration: none;
}
a {
    color: var(--text-primary);
}

#mobile {
    margin-top: 2px;
    display: none;
    width: 100%;
}

@media only screen and (max-width: 630px) {
    #desktop_nav {
        display: none;
    }
    #mobile {
        display: block;
    }

    #dropdown {
        display: none;
    }

    #dropdown h3 {
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: rgb(219, 219, 219);
    }

    #top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    #burger_button {
        height: 50px;
        width: 50px;
    }

    #top .title {
        margin-left: 3vw;
    }
}
</style>
