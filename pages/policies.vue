<template>
    <main>
        <h1 id="title">Our Commitment</h1>

        <nav id="policy_nav">
            <span v-on:click="scrollTo('flexibility')">Flexibility</span>
            <span v-on:click="scrollTo('inclusivity')">Inclusivity</span>
            <span v-on:click="scrollTo('collaboration')">Collaboration</span>
            <span v-on:click="scrollTo('communication')">Communication</span>
        </nav>

        <div id="policies">
            <section ref="flexibility">
                <h1>Flexibility Policies</h1>

                <div
                    v-for="policy in policies"
                    v-if="policy.catagory == 'flexibility'"
                    :key="policies._id"
                >
                    <Policy
                        :name="policy.name"
                        :description="policy.description"
                        :why="policy.why"
                        :how="policy.how"
                    />
                </div>
            </section>
            <section ref="inclusivity">
                <h1>Inclusivity Policies</h1>
                <div
                    v-for="policy in policies"
                    v-if="policy.catagory == 'inclusivity'"
                    :key="policies._id"
                >
                    <Policy
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
export default {
    async asyncData({ $http }) {
        const policies = await $http.$get("/api/get_policies");
        return {
            policies,
        };
    },
    mounted() {
        console.log("Policies: ", JSON.parse(JSON.stringify(this.policies)));
    },
    methods: {
        scrollTo(where) {
            this.$refs[where].scrollIntoView();
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
    /* background-color: red; */
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center; /* Align center on Y axis */
    justify-content: center; /* Align center on X axis */
}

#policy_nav span {
    font-size: 1.4rem;
    margin-right: 0.1vw;
    margin-left: 0.1vw;
    width: 15vw;
    text-align: center;
    text-decoration: underline;
}

#policies h1 {
    text-align: center;
}
</style>
