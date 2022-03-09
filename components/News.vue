<template>
    <div id="news_holder">
        <div id="news">
            <input type="checkbox" id="news_title" />
            <label for="news_title">News</label>
            <span id="news_toggle"></span>
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
    mounted() {},
    data() {
        return {};
    },
};
</script>

<style scoped>
#news {
    width: 100%;
    margin: auto;
    text-align: center;
    position: relative;
}
#news_list {
    width: 95%;
    margin: auto;
}

input#news_title {
    display: none;
    z-index: 1;
}

input#news_title + label {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    z-index: 2;
    cursor: pointer;
}
#news_toggle {
    display: none;
}

@media (max-width: 1100px) {
    #news_list {
        display: none;
    }
    #news_toggle {
        display: block;
        z-index: -1;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 3.5%;
        top: 16px;
        text-align: left;
        color: var(--text-primary);
        font-size: 1.5rem;
    }
    #news_toggle::after {
        content: "∧";
    }

    input#news_title:checked ~ #news_toggle::after {
        content: "∨";
    }

    input#news_title:checked ~ #news_list {
        display: block;
    }
}

#news_holder {
    /* background-color: rgb(226, 226, 226); */
    z-index: -2;
    color: var(--text-primary);
    height: 100%;
}
</style>
