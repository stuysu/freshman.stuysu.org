<template>
    <div id="app">
        <NavBar id="nav" />
        <Nuxt id="main" />
    </div>
</template>
<script></script>

<style>
@font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans/OpenSans-Regular.ttf") format("truetype");
}
:root {
    font-size: 16px;
    --text-primary: #2c3e50;
    /* --text-secondary: #ececec; */
    /* --bg-primary: #23232e;
    --bg-secondary: #141418; */
    --transition-speed: 600ms;
    --main-font: "Open Sans", Arial, Helvetica, sans-serif;
    font-family: var(--main-font);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: white;
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

    color: #2c3e50;

    /* to be away from nav */
}

#main {
    min-height: calc(100vh - 85px);
}
</style>
