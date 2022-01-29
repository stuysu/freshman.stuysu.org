<template>
    <div id="announcements_holder">
        <div id="announcements">
            <input type="checkbox" id="announcements_title" />
            <label for="announcements_title"> Announcements </label>

            <div id="announcements_list">
                <div
                    v-for="announcement in this.data"
                    class="announcement_container"
                >
                    <Announcement
                        :key="announcement._id"
                        :title="announcement.title"
                        :body="announcement.description"
                        :img_src="announcement.img_src"
                    />
                </div>
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

.announcement_container {
    width: 95%;
    max-width: 400px;
    margin: auto;
    margin-bottom: 20px;
}
@media (max-width: 1100px) {
    #announcements {
    }
    .announcement_container {
        height: 470px;
    }
    #announcements_list {
        display: none;
        height: 500px;
        overflow-y: scroll;
        margin-bottom: 10px;
    }
    input#announcements_title:checked ~ #announcements_list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}
</style>
