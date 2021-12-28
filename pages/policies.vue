<template>
    <main>
        <h1 id="title">Our Commitment</h1>
        <h1>Flexibility Policies:</h1>
        <!-- <Policy
            name="Homework Policy Reinforcements"
            description="Despite Principal Yu stating that all HW assignments (AP or not) should take no more than 30 minutes, many teachers are finding loopholes around this and as a result, many students still spend hours on one assignment for a class."
            why="This is why with the implementation of a “listing” system that students can use when needing to confirm whether a certain assignment breaks Principal Yu’s “30 minute HW” rule, it will help clarify and define the rule and give students the confidence to communicate with their teachers in order to have a more enjoyable school experience. In order for the report to be made to the teacher, 25% of the class must agree and if not, then the student will come to understand that they will be in need of academic assistance. In addition, students will be anonymous. "
        />
        <Policy name="Headphones Policy" /> -->
        <div>
            <Policy
                v-for="policy in policies"
                :key="policies._id"
                :name="policy.name"
                :description="policy.description"
                :why="policy.why"
            />
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
}
#title {
    text-align: center;
}

p {
    font-size: 1.2rem;
}
</style>
