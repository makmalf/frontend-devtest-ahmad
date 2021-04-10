<template>
    <div class="homepage">
        <v-container v-if="!posts" class="loader-container d-flex justify-center align-center">
            <v-progress-circular color="primary" indeterminate class="text-center" size="70"></v-progress-circular>
        </v-container>
        <v-container v-else>
            <v-row>
                <v-col>
                    <Card class="mt-5 card-item" v-for="post in posts" :cardTitle="post.title" :cardText="post.body" :key="post.id" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from "axios"
import Card from "../components/Card.vue"

export default {
    mounted() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => (this.posts = res.data))
    },
    data() {
        return {
            posts: null,
        }
    },
    components: { Card },
}
</script>

<style>
.loader-container {
    min-height: 100vh;
}
.card-item:nth-child(even) {
    background-color: #eee;
}
</style>
