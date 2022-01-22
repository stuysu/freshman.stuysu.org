<template>
    <div id="news_holder">
        <div id="news">
            <h2 id="news_title">News</h2>
            <div id="news_list">
                <div class="news_event">Uno</div>
                <div class="news_event">Dos</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#news {
    width: 95%;

    margin: auto;
    text-align: center;
}
.news_event {
    font-size: 1.4rem;
    text-align: left;
}
#news_title {
    font-size: 1.7rem;
}
#news_holder {
    background-color: rgb(226, 226, 226);
    color: black;
    height: 100%;
}
</style>
