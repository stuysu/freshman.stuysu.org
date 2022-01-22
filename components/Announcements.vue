<template>
    <div id="announcements_holder">
        <div id="announcements">
            <input type="checkbox" id="announcements_title"/>
            <label for="announcements_title"> Announcements </label>
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

input#announcements_title {
    display: none;
}

input#announcements_title +label{
    font-size: 2rem;
    font-weight: bold;
    padding-top: 2%;
    padding-bottom: 5%;
}

@media (max-width: 1100px) {
	#announcements_list {
	    display: none;
	}
	input#announcements_title:checked ~ #announcements_list {
	    display: inline-block;
	}
}
</style>
