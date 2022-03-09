<template>
    <div id="announcements_holder">
        <div id="announcements">
            <input type="checkbox" id="announcements_title" />
            <label for="announcements_title"> Announcements </label>
            <span id="announcements_toggle"></span>
            <div id="announcements_list">
                <div
                    v-for="announcement in data"
                    class="announcement_container"
                >
                    <Announcement
                        :key="announcement._id"
                        :title="announcement.title"
                        :body="announcement.description"
                        :src="announcement.src"
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
    position: relative;
    margin: auto;
    text-align: center;
}

input#announcements_title {
    display: none;
}

input#announcements_title + label {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
}

.announcement_container {
    width: 95%;
    max-width: 400px;
    margin: auto;
    margin-bottom: 20px;
}
@media (max-width: 1100px) {
    .announcement_container {
        height: 400px;
    }
    #announcements_list {
        display: none;
        /* height: 500px; */
        overflow-y: scroll;
        margin-bottom: 10px;
    }
    #announcements_toggle {
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
    #announcements_toggle::after {
        content: "∧";
    }

    input#announcements_title:checked ~ #toggle::after {
        content: "∨";
    }
    input#announcements_title:checked ~ #announcements_list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}
</style>
