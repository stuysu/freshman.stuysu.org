<template>
    <main>
        <h1 id="title">About Us</h1>
        <nuxt-img
            id="landimg"
            src="/img/landscape.jpg"
            alt="Andy and Fin smiling"
        />
        <h2>Who are we?</h2>
        <p>
            Andy Xian (1QQ) and Fin Ying (1YY) are close friends who have known
            each other for 4 years as they went to the same middle school and
            share the common passion of holding leadership positions and
            representing the student body!
        </p>
        <section id="presidents">
            <div class="president">
                <nuxt-img
                    id="andyimg"
                    src="/img/andy_smiling.jpg"
                    alt="Andy smiling"
                />
                <h2>Andy Xian</h2>
                <div>
                    <p>
                        As the current co-president of the freshman caucus, Andy
                        Xian has a curious mindset and is someone who loves to
                        try new things especially now that he's attending
                        Stuyvesant High School.
                    </p>
                    <p>
                        Andy ran for freshman caucus as he has a huge passion
                        for leadership and bringing out change in his community,
                        as supported by his 5 total years of student union
                        experience from elementary and middle school. As of the
                        2021-2022 school year, he is most looking forward to
                        accomplishing the sports catalog, talent month, freshman
                        olympics, newsletters, homework policy reinforcements,
                        band microphone policy, and chat n' chill meets.
                    </p>
                    <p>
                        Alongside freshman caucus, Andy is also an epeeist on
                        the fencing team, a trombonist in symphonic band, and a
                        member of a few other clubs. He used to be a part of
                        student union communications, badminton, debate, and
                        tutoring. In the future, he would love to volunteer for
                        community service.
                    </p>
                    <p>
                        In his free time, he loves to explore the realm of his
                        hobbies, which include doing sports and exercising,
                        playing and listening to music, watching and playing
                        games, literature, cooking, and traveling (which he
                        hasn't been able to do in a long while).
                    </p>
                </div>
            </div>
            <div class="president">
                <h2>Fin Ying</h2>
            </div>
        </section>
        <h2>What's our experience?</h2>
        <p>
            Both Andy and Fin have experience with leadership as Fin was the
            Editor-In-Chief of the Yearbook Committee, member of the ARISTA
            Honors Society, and currently a member of the Stuyvesant Asian
            Coalition as well as a manager on the Girls Varsity Volleyball Team.
            These past and current leadership positions have taught her how to
            effectively collaborate with a team and advocate for changes that
            will benefit the community. As for Andy, he has 4 years of
            experience in the SU itself; in 5th grade, he was a member of the
            student union, in 6th grade, he was the 6th grade delegate, in 7th
            grade, he was the vice president, and finally, in 8th grade, he was
            the president of his middle school as well as a member of the SLT
            (Student Leadership Team) and 8th grade Cabinet. Not only that, he
            is currently an announcer in the SU Communications Department.
            During his times in the student union, he worked to create events
            (Spirit Weeks, Fall Dances, Game Nights), fundraisers (Toy Drive,
            Soles for Souls), and addressed school issues to fix (mic + cam
            obligations during remote learning, virtual vs. in-person
            graduation) which all taught him the valuable leadership skills of
            open-mindedness, having a clear vision, and being compassionate
            about what he does.
        </p>
        <h2>Who's in the team?</h2>
        <div id="team_directors">
            <Director
                name="Lenny Metlitsky"
                role="IT Director"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                img_url="/img/default_pfp.jpg"
            />
            <Director
                name="Mason Chung"
                role="Chief of Staff #1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                img_url="/img/default_pfp.jpg"
            />
            <Director
                name="Tajrian Jahan"
                role="Chief of Staff #2"
                description="Tajrian is a Chief of Staff, and is responsible for assisting 
				the Presidents and moderating all staff and directors."
                img_url="/img/staff/directors/TajrianJahan.jpg"
            />
            <Director
                name="Rou Chen"
                role="Secretary"
                description="Rou's the secretary. She records and takes minutes (notes) for meetings, manages progress for projects, and notes important dates."
                img_url="/img/staff/directors/RouChen.jpg"
            />
            <Director
                name="Grace Rhee"
                role="Socials Director"
                description="Grace is the Media Outreach Director. She oversees the social media team which is responsible for general communication."
                img_url="/img/staff/directors/GraceRhee.jpg"
            />
            <Director
                name="Jia Wen Lin"
                role="Graphics Director"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                img_url="/img/default_pfp.jpg"
            />
            <Director
                name="Ray Xu"
                role="Policy Director #1"
                description="Ray is one of two Policy directors responsible for representing freshmen. 
				He is obsessed with Charlie Puth."
                img_url="/img/staff/directors/RayXu.jpg"
            />
            <Director
                name="Josephine G."
                role="Policy Director #2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                img_url="/img/default_pfp.jpg"
            />
            <Director
                name="Ayla Irshad"
                role="Finance Director"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                img_url="/img/default_pfp.jpg"
            />
            <Director
                name="Salma Azim"
                role="Events Director #1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                img_url="/img/default_pfp.jpg"
            />
            <Director
                name="Grace Na"
                role="Events Director #2"
                description="Grace is a Events Director and is responsible for the freshmen related events that will be held through the year."
                img_url="/img/staff/directors/GraceNa.jpg"
            />
        </div>
    </main>
</template>
<script>
export default {};
</script>
<style scoped>
#title {
    text-align: center;
}

main {
    width: 90vw;
    min-width: 300px;
    margin: auto;
}

h2 {
    text-align: center;
}

#landimg {
    width: 100%;
    max-width: 700px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
}

#team_directors {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
#team_directors * {
    min-width: 255px;
    flex: 1;
    max-width: 320px;
    margin: 20px;
    height: 355px;
}

#presidents {
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    padding: 10px;
}
.president {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.president h2 {
    text-align: center;
}

.president p {
    margin-bottom: 8px;
}

@media (max-width: 650px) {
    #presidents {
        display: block;
    }
}
#andyimg {
    max-width: min(300px, 80vw);
    margin-right: auto;
    margin-left: auto;
}
</style>
