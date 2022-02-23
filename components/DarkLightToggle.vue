<template>
    <div>
	<button class="theme_toggle" v-on:click="toggle" tabindex="0">
	    <p class="light">☀️</p>
	    <p class="dark">🌙</p>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        toggle() {
		window.localStorage.setItem('pref-color', (this.isDark() ? 'light' : 'dark'));  // set negation of current state
		this.setTheme();
            },

	setTheme() {
		let darkState = this.isDark();
		if(darkState) {
			document.getElementsByTagName('html')[0].className = "dark_mode";
		}
		else {
			document.getElementsByTagName('html')[0].className = "light_mode";
		}
        },
	
	isDark() {
		let dark = window.localStorage.getItem('pref-color');
		if (dark)  // is defined
			dark = (dark === 'dark');
		else  // isnt defined, read system theme
			dark = window.matchMedia("(prefers-color-scheme: dark)");
		return dark;
	},
    },

    async created() {
        console.log("created!");
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
