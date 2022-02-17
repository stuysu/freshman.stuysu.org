<template>
    <div class="announcement">
        <div class="announcement_content">
            <img class="announcement-thumbnail" :src="img_src" :alt="alt" />
            <div class="announcement-title">
                {{ title }}
            </div>
            <div class="announcement-body" v-html="body"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Announcement",
    props: ["title", "body", "src", "img_src", "alt"],
};
</script>

<style scoped>
.announcement {
    color: inherit;
    display: block;
    text-decoration: none;

    transition: 0.2s;
    width: 100%;
    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 1%;
}
.announcement:hover {
    background: #f0f0f0;
}

.announcement-title {
    font-size: 1.4rem;
    font-weight: bold;
    width: 95%;
    margin: auto;
}
.announcement-thumbnail {
    max-height: 220px;
    max-width: 100%;
}
.announcement-body {
    width: 95%;
    margin: auto;
    color: #3f3f3f;
}
.announcement_content {
    margin: auto;
}
</style>
