<template>
    <div>
        <div class="textlogo">
            <div>ANDY-FIN</div>
            <div>CAUCUS</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextLogo",
};
</script>
<style scoped>
.textlogo {
    font-size: 24px;
    font-family: sans-serif;
    font-weight: bold;
    letter-spacing: 0.15em;
    width: 180px;
    height: 80px;
    padding-top: 13px;
    padding-bottom: 7px;
}
.light_mode .textlogo {
    color: #71749d;
}
.dark_mode .textlogo {
    color: #8a8dbe;
}
</style>
