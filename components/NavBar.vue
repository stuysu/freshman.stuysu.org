<template>
    <div>
        <nav id="desktop_nav">
            <div class="page_link">
                <NuxtLink to="/suggest">Suggestions</NuxtLink>
            </div>
            <div class="page_link">
                <NuxtLink to="/policies">Policies</NuxtLink>
            </div>
            <div class="title_parent">
                <NuxtLink class="title" to="/"><TextLogo /></NuxtLink>
            </div>
            <div class="page_link">
                <NuxtLink to="/about">About Us</NuxtLink>
            </div>
            <div class="page_link">
                <NuxtLink to="/socials">Social Media</NuxtLink>
            </div>
        </nav>
        <nav id="mobile">
            <div id="top">
                <NuxtLink to="/" class="title"><TextLogo /></NuxtLink>
                <button id="burger_button" v-on:click="toggle" tabindex="0">
                    <svg
                        id="burger_button_svg"
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
                </button>
            </div>
            <div id="dropdown" ref="dropdown">
                <h3>
                    <NuxtLink class="dropdownlink" to="/suggest"
                        >Suggestions</NuxtLink
                    >
                </h3>
                <h3>
                    <NuxtLink class="dropdownlink" to="/policies"
                        >Policies</NuxtLink
                    >
                </h3>
                <h3>
                    <NuxtLink class="dropdownlink" to="/about"
                        >About Us</NuxtLink
                    >
                </h3>
                <h3>
                    <NuxtLink class="dropdownlink" to="/socials"
                        >Social Media</NuxtLink
                    >
                </h3>
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

.page_link {
    margin-right: 0.1vw;
    margin-left: 0.1vw;
    width: 15vw;
    text-align: center;
}

.title,
.title_parent {
    width: 180px !important;
    text-decoration: none;
    text-align: center;
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
        background-color: #ececec;
    }
    .dropdownlink {
        color: #71749d !important;
    }

    #top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 0px;
        margin-right: 0px;
    }

    #burger_button {
        height: 50px;
        width: 50px;
        border: none;
        background: none;
        margin-right: 15px;
    }
    #burger_button_svg {
        height: 50px;
        width: 50px;
    }

    #top .title {
        margin-left: 3vw;
    }
}
</style>
