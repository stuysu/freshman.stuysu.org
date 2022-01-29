<template>
    <div id="announcements_holder">
        <div id="announcements">
            <input type="checkbox" id="announcements_title" />
            <label for="announcements_title"> Announcements </label>

            <div id="announcements_list">
                <Announcement
                    v-for="announcement in this.data"
                    :key="announcement._id"
                    :title="announcement.title"
                    :body="announcement.description"
                    :img_src="announcement.img_src"
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
        console.log("Data prop", this.data);
    },
    data() {
        return {};
    },
};
</script>
<style scoped>
#announcements {
    width: 100%;

    margin: auto;
    text-align: center;
    color: #1f1f1f;
}

input#announcements_title {
    display: none;
}

input#announcements_title + label {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
}

@media (max-width: 1100px) {
    #announcements_list {
        display: none;
    }
    input#announcements_title:checked ~ #announcements_list {
        display: block;
        padding-bottom: 5px;
    }
}
</style>
