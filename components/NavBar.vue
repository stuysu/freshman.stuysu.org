<template>
    <nav>
        <!-- 2 hidden navToggle elements that get selectively shown when the media query is active -->
        <span id="toggle" class="navToggle on" @click="openMenu">&#8801;</span>
        <span id="close" class="navToggle on" @click="closeMenu">x</span>
        <!-- 1 logo at the "start" of the list for when in media query -->
        <NuxtLink to="/" id="top-hidden"><img src="/logo.png" alt="Andy + Fin Caucus Logo"></NuxtLink>
        <NuxtLink to="/suggest">Suggestions</NuxtLink>
        <NuxtLink to="/policies">Policies</NuxtLink>
        <!-- 1 logo in the middle for the site normally -->
        <NuxtLink to="/" id="title"><img src="/logo.png" alt="Andy + Fin Caucus Logo"></NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/socials">Social Media</NuxtLink>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    methods: {
        openMenu() {
            let burger = document.getElementById('toggle');
            burger.classList.remove('on');
            burger.classList.add('off');

            let navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('open');
        },

        closeMenu() {
            let burger = document.getElementById('toggle');
            burger.classList.remove('off');
            burger.classList.add('on');

            let navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('open');
        }
    }
};
</script>
<style scoped>
nav {
    width: 100%;
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

/* 2 nav toggle states so we can selectively show and hide when media query is active, but always hide when not */
.navToggle.on {
    display: none;
}

.navToggle.off {
    display: none;
}

/* by default hide the top image for the media query */
#top-hidden {
    display: none;
}
a {
    color: var(--text-primary);
}

@media only screen and (max-width: 700px) and (orientation:portrait) {
    nav {
        position: absolute;
        height: 100vh;
        background-color: #760907;
        float: left;

        top: 0;
        left: 0;
        justify-content: start;
        flex-direction: column;
        transform: translateX(-100vw);  /* hide navbar away by default */
    }

    nav * {
        font-size: 5vw;
        max-font-size: 36px;
        text-decoration: none;
        background-color: #9f1116;
        min-height: 5vw;
        width: 80vw;
        padding: 5vh 10vw 5vh 10vw;
    }

    nav img {
        background-color: transparent;
        width: 33vw;
        height: 33vw;
    }

    /* show previously hidden logo image at front of list here */
    #top-hidden {
        display: block;
    }

    /* hide previously shown log image in the middle */
    #title {
        display: none;
    }

    nav *:hover {
        background-color: #760907;
    }

    #close {
        position: ABSOLUTE;
        right: 1vw;
    }

    #toggle {
        position: absolute;
        left: 1vw;
        transition: 1s;
        transform: translateX(100vw);
    }

    .navToggle {
        text-decoration: none;
        background-color: transparent !important;  /* overwrite nav element backgrounds */
        color: #afafaf;
        font-size: 24px;
        top: 1vh;
        width: 5vh;
        height: 5vh;
        padding: 0;

        cursor: pointer;  /* make cursor show as clickable (since these aren't actual link elements) */
    }

    .navToggle.on {
        display: block;
    }

    /* used to animate sliding of navbar after clicking button */
    nav.open {
        position: sticky;
        transition: 1s;
        transform: translateX(0vw);
    }
}
</style>
