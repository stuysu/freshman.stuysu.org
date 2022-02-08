<template>
    <div class="news-article">
        <div class="news-title">{{ title }}</div>
        <div class="news-detail" v-html="text"></div>
    </div>
</template>

<script>
export default {
    name: "Article",
    props: ["title", "text"],
};
</script>

<style scoped>
.news-article {
    font-size: 1rem;
    text-align: left;
    padding-bottom: 2vh;
}
.news-title {
    font-weight: bold;
}
</style>
