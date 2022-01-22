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
}
#feed_container {

    width: 30vw;
}
#news_container {
    width: 20vw;
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
    }
    #news_container {
        width: 100%;
    }
    #news {
        width: 95%;
    }
}
</style>
