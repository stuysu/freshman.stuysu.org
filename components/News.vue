<template>
    <div id="news_holder">
        <div id="news">
            <input type="checkbox" id="news_title" />
            <label for="news_title">News</label>
            <div id="news_list">
                <Article
                    v-for="announcement in this.data"
                    :key="announcement._id"
                    :title="announcement.title"
                    :text="announcement.content"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: [],
        },
    },
    mounted() {
        console.log("News prop", this.data);
    },
    data() {
        return {};
    },
};
</script>

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
