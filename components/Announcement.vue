<template>
        <a :href="src" target="_blank" class="announcement">
            <img class="announcement-thumbnail" :src="img_src" :alt="alt" />
            <div class="announcement-title">
                {{ title }}
            </div>
            <div class="announcement-body">
                {{ body }}
            </div>
        </a>
</template>

<script>
export default {
    name: "Announcement",
    props: ["title", "body", "src", "img_src", "alt"],
}
</script>

<style scoped>
.announcement {
    color: inherit;
    display: inline-block;
    text-decoration: none;
    padding: 2.5%;
    transition: 0.5s;
}
.announcement:hover {
    background: #f0f0f0;
}

.announcement-title {
    font-size: 1.4rem;
    font-weight: bold;
}
.announcement-thumbnail {
    width: 100%;
}
.announcement-body {
    color: #3f3f3f;
}

</style>
