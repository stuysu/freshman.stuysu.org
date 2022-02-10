<template>
    <main>
        <h1 id="title">
            Stuyvesant's Freshman Caucus, led by Andy Xian and Fin Ying!
        </h1>
        <div id="layoutcontainer">
            <section id="main_content_container">
                <MainContent
                    :schedule="main_data.schedule"
                    :bell_schedule_type="main_data.bell_schedule_type"
                />
            </section>
            <section id="feed_container">
                <Announcements
                    v-if="main_data"
                    :data="main_data.announcements"
                />
            </section>
            <section id="news_container">
                <News v-if="main_data" :data="main_data.news" />
            </section>
        </div>
    </main>
</template>

<script>
import get_base_url from "../helpers/get_base_url";
export default {
    async asyncData({ $http }) {
        let main_data = await $http.$get(get_base_url() + "/api/get_main");

        return {
            main_data,
        };
    },
    mounted() {
        console.log(
            "main_data in main: ",
            JSON.parse(JSON.stringify(this.main_data))
        );
    },
    methods: {},
};
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
