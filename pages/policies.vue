<template>
    <main>
        <h1 id="title">Our Commitments</h1>

        <nav id="policy_nav">
            <div class="wrapper">
                <span v-on:click="scrollTo('flexibility')">Flexibility</span>
            </div>
            <div class="wrapper">
                <span v-on:click="scrollTo('information')">Information</span>
            </div>
            <div class="wrapper">
                <span v-on:click="scrollTo('events')">Events</span>
            </div>
        </nav>

        <div id="policies">
            <section ref="flexibility">
                <h1>Flexibility Policies</h1>

                <div
                    v-for="policy in this.policies"
                    v-if="policy.category == 'flexibility'"
                    :key="policies._id"
                >
                    <Policy
                        class="policy"
                        :name="policy.name"
                        :description="policy.description"
                        :why="policy.why"
                        :how="policy.how"
                    />
                </div>
            </section>
            <section ref="information">
                <h1>Information Policies</h1>
                <div
                    v-for="policy in policies"
                    v-if="policy.category == 'information'"
                    :key="policies._id"
                >
                    <Policy
                        class="policy"
                        :name="policy.name"
                        :description="policy.description"
                        :why="policy.why"
                        :how="policy.how"
                    />
                </div>
            </section>
            <section ref="events">
                <h1>Events Policies</h1>
                <div
                    v-for="policy in policies"
                    v-if="policy.category == 'events'"
                    :key="policies._id"
                >
                    <Policy
                        class="policy"
                        :name="policy.name"
                        :description="policy.description"
                        :why="policy.why"
                        :how="policy.how"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import get_base_url from "../helpers/get_base_url";
export default {
    async asyncData({ $http }) {
        const policies = await $http.$get(get_base_url() + "/api/get_policies");
        return {
            policies,
        };
    },
    mounted() {
        console.log("Policies: ", JSON.parse(JSON.stringify(this.policies)));
    },
    methods: {
        scrollTo(where) {
            this.$refs[where].scrollIntoView({ behavior: "smooth" });
        },
    },
};
</script>
<style scoped>
main {
    padding-right: 2vw;
    padding-left: 2vw;
    padding-bottom: 2vh;
    max-width: 900px;
    margin: auto;
}
#title {
    text-align: center;
}

p {
    font-size: 1.2rem;
}

#policy_nav {
    width: 100%;
    display: flex;
    justify-content: space-around; /* Align center on X axis */
    flex-wrap: wrap;
}

.policy {
    margin-top: 15px;
    margin-bottom: 15px;
}

#policy_nav .wrapper {
    flex: 1;
    width: 200px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
}

#policy_nav span {
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.4rem;
}

#policies h1 {
    padding-top: 8px;
    text-align: center;
}
@media only screen and (max-width: 630px) {
    #title {
        display: none;
    }
}
</style>
