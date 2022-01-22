<template>
    <main>
        <h1 id="title">
            Stuyvesant's Freshman Caucus, led by Andy Xian and Fin Ying!
        </h1>
        <div id="layoutcontainer">
            <section id="main_content_container">
                <MainContent />
            </section>
            <section id="feed_container"><Announcements /></section>
            <section id="news_container">
                <News />
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
    width: 96vw;
    margin: auto;
}

#layoutcontainer {
    /* height: 85vh; */
    /* background-color: grey; */
    display: flex;
    margin-top: 10px;
}
#layoutcontainer section {
    border: 1px solid rgb(197, 197, 197);
}
#main_content_container {
    width: 50vw;
    /* height: 100%;
    background-color: red; */
}
#feed_container {

    width: 30vw;
    /* height: 100%;
    background-color: blue; */
}
#news_container {
    width: 20vw;
    /* height: 100%; */
}

@media (max-width: 1100px) {
    #layoutcontainer {
        flex-direction: column-reverse;
        height: fit-content;
        margin-bottom: 10vh;
    }
    #main_content_container {
        width: 100%;
        /* height: 45vh; */
        min-height: 500px;
    }
    #feed_container {
        width: 100%;
        /*height: 25vh;*/
        min-height: 400px;
    }
    #news_container {
        width: 100%;
        /*height: 25vh;*/
        min-height: 200px;
    }
    #news {
        width: 95%;
    }
}
</style>
