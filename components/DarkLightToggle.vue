<template>
    <div>
        <button class="theme_toggle" v-on:click="toggle" type="button">
            <b class="light">☀️</b>
            <b class="dark">🌙</b>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        toggle() {
            // set negation of current state
            window.localStorage.setItem('pref-color', (this.isDark() ? 'light' : 'dark'));
            this.setTheme();
        },

        setTheme() {
            if (typeof window !== 'undefined')  // guard to run only on client side
                document.getElementsByTagName('html')[0].className = (this.isDark() ? "dark_mode" : "light_mode");
        },

        isDark() {
            let dark = window.localStorage.getItem('pref-color');
            if (dark)  // is defined
                return (dark === 'dark');
            else  // isnt defined, read system theme
                return window.matchMedia("(prefers-color-scheme: dark)");
        },
    },

    async created() {
        this.setTheme();
    }
};
</script>
<style scoped>
.theme_toggle {
    border: none;
    text-align: center;
    font-size: 32px;
    background-color: #00000000;
}

.light_mode .dark {
    display: none;
}

.dark_mode .light {
    display: none;
}

</style>
