<template>
    <main>
        <h1 id="title">About Us</h1>
        <img id="landimg" src="/img/landscape.jpg" />
        <h2>Who are we?</h2>
        <p>
            Andy Xian (1QQ) and Fin Ying (1YY) are close friends who have known
            each other for 4 years as they went to the same middle school and
            share the common passion of holding leadership positions and
            representing the student body!
        </p>
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
            <Director name="Lenny Metlitsky" role="IT Director" />
            <Director name="Mason Chung" role="Cheif of Staff #1" />
            <Director name="Tajrian Jahan" role="Cheif of Staff #2" />
            <Director name="Rou Chen" role="Secretary" />
            <Director name="Grace Rhee" role="Socials Director" />
            <Director name="Jia Wen Lin" role="Graphics Director" />
            <Director name="Ray Xu" role="Policy Director #1" />
            <Director name="Josephine G." role="Policy Director #2" />
            <Director name="Ayla Irshad" role="Finance Director" />
            <Director name="Salma Azim" role="Events Director #1" />
            <Director name="Grace Na" role="Events Director #2" />
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
    width: 80vw;
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
}

#team_directors {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
#team_directors * {
    min-width: 250px;
    flex: 1;
    max-width: 300px;
    margin: 20px;
    height: 350px;
}
</style>
