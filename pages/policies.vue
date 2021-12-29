<template>
    <main>
        <h1 id="title">Our Commitment</h1>
        <div>
            <h1>Flexibility Policies:</h1>

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
</style>
