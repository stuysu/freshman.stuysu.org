<template>
    <div id="app">
        <NavBar id="nav" />
        <Nuxt id="main" />
    </div>
</template>
<script></script>

<style>
:root {
    font-size: 16px;

    --transition-speed: 600ms;
    --main-font: Arial, Helvetica, sans-serif;
    font-family: var(--main-font);
}

.dark_mode {
    --text-primary: rgb(236, 236, 236);
    --text-secondary: #979a9e;
    --background-primary: rgb(39, 39, 42);
}
.light_mode {
    --text-primary: rgb(22, 22, 22);
    --text-secondary: #2c3e50;
    --background-primary: white;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: var(--background-primary);
    margin: 0;
    padding: 0;
    color: var(--text-primary);
    font-family: var(--main-font);
    font-weight: normal;
}

body::-webkit-scrollbar {
    width: 0.25rem;
}

body::-webkit-scrollbar-track {
    background: #2c3e50;
}

body::-webkit-scrollbar-thumb {
    background: #3f943f;
}

#app {
    font-family: var(--main-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: var(--text-primary);
    /* background-color: var(--background-primary); */
    /* to be away from nav */
}

#main {
    min-height: calc(100vh - 85px);
}
</style>
