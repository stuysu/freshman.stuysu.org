<template>
    <main>
        <h1 id="title">
            Stuyvesant's Freshman Caucus, led by Andy Xian and Fin Ying!
        </h1>
        <div id="layoutcontainer">
            <div id="main_content"></div>
            <div id="feed"></div>
            <section id="news_container">
                <div id="news">
                    <h2>News</h2>
                    <div id="newslist">
                        <div class="newsevent">Uno</div>
                        <div class="newsevent">Dos</div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
export default {};
</script>
<style scoped>
#title {
    text-align: center;
}

main {
    width: 95vw;
    margin: auto;
}

#layoutcontainer {
    height: 85vh;
    background-color: grey;
    display: flex;
}

#main_content {
    width: 50vw;
    height: 100%;
    background-color: red;
}
#feed {
    height: 100%;
    width: 30vw;
    background-color: blue;
}
#news_container {
    width: 20vw;
    height: 100%;
    background-color: orange;
    color: black;
}
#news {
    width: 18vw;
    margin: auto;
    text-align: center;
}
.newsevent {
    font-size: 1.4rem;
    text-align: left;
}
</style>
