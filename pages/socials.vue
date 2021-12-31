<template>
    <main>
        <h1 id="title">Our Social Media</h1>
        <br />
        <SocialLink
            flavor="Follow us on Instagram"
            url="https://www.instagram.com/stuyfreshmancaucus/"
            logo="/img/social_media/instagram.png"
            logo_alt="Instagram Logo"
            theme="--color: linear-gradient(90deg, #ffde51, #f63838, #c938c5)"
        />
        <SocialLink
            flavor="Find us on Facebook"
            url="https://www.facebook.com/StuyFreshmanCaucus/"
            logo="/img/social_media/facebook.png"
            logo_alt="Facebook Logo"
            theme="--color: #1877F2"
        />
        <SocialLink
            flavor="Join our Discord server"
            url="https://discord.gg/"
            logo="/img/social_media/discord.svg"
            logo_alt="Discord Logo"
            theme="--color: #5865F2"
        />
    </main>
</template>

<script>
import SocialLink from "~/components/SocialLink";
export default {
    components: {SocialLink}
};
</script>
<style scoped>
main {
    text-align: center;
    align-content: center;
}
</style>
