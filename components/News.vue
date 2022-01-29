<template>
    <div id="news_holder">
        <div id="news">
            <input type="checkbox" id="news_title" />
            <label for="news_title">News</label>
            <div id="news_list">
                <Article
                    title="Beijing Olympics"
                    text="+100 social credit to those participating in the 2022 Beijing Winter Olympics"
                />
                <Article
                    title="New 4th floor mural"
                    text="A new geometric mural has been painted on the 4th floor wall for no real reason lol."
                />
                <Article
                    title="Never Gonna Give You Up"
                    text="Never gonna let you down. Never gonna run around and desert you."
                />
                <Article
                    title="Never Gonna Make You Cry"
                    text="Never gonna say goodbye. Never gonna tell a lie and hurt you."
                />
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

input#news_title {
    display: none;
}

input#news_title + label {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
}

@media (max-width: 1100px) {
    #news_list {
        display: none;
    }
    input#news_title:checked ~ #news_list {
        display: block;
    }
}

#news_holder {
    background-color: rgb(226, 226, 226);
    color: black;
    height: 100%;
}
</style>
