<template>
    <main>
        <h1 id="title">Our Commitments</h1>

        <nav id="policy_nav">
            <div class="wrapper">
                <span v-on:click="scrollTo('flexibility')">Flexibility</span>
            </div>
            <div class="wrapper">
                <span v-on:click="scrollTo('inclusivity')">Inclusivity</span>
            </div>
            <div class="wrapper">
                <span v-on:click="scrollTo('collaboration')">
                    Collaboration
                </span>
            </div>
            <div class="wrapper">
                <span v-on:click="scrollTo('communication')">
                    Communication
                </span>
            </div>
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
