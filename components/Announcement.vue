<template>
    <div class="announcement">
        <div class="announcement_content">
            <img class="announcement-thumbnail" :src="img_src" :alt="alt" />
            <h2 class="announcement-title">
                {{ title }}
            </h2>
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
.light_mode .announcement:hover {
    background: #f0f0f0;
}
.dark_mode .announcement:hover {
    background: #6b6666;
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
    color: var(--text-primary);
}
.announcement_content {
    margin: auto;
}
</style>
