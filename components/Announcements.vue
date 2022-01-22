<template>
    <div id="announcements_holder">
        <div id="announcements">
            <h2 id="announcements_title">Announcements</h2>
            <div id="announcements_list">
                <Announcement
                    title="Fin plays with legos"
                    body="the fin from the Freshman Caucus '22 discordapp.com server plays with legos, spec humor writer ayma lyir states"
                    src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    img_src="https://picsum.photos/300/150"
                    alt="sample image"
                />
                <Announcement
                    title="Chat n' Chill Meeting this Friday"
                    body="We will be hosting our first Chat n' Chill meeting, where you're free to chat and chill, the next time I get the CSS right first time"
                    src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    img_src="https://picsum.photos/300/150"
                    alt="sample image"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
#announcements {
    width: 100%;

    margin: auto;
    text-align: center;
    color: #1f1f1f;
}

.announcement {
    font-size: 1rem;
    /* text-align: left; */
}
#announcements_title {
    font-size: 2rem;
    padding-top: 2%;
    padding-bottom: 5%;
}
</style>
<script>
import Announcement from "~/components/Announcement";
export default {
    components: {Announcement}
}
</script>
