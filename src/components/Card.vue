<template>
    <v-card class="d-flex justify-space-around">
        <div class="container">
            <v-card-title class="card-title font-weight-bold">{{ cardTitle }}</v-card-title>
            <v-card-text>{{ cardText }}</v-card-text>
        </div>
        <v-card-actions><button @click="liked = !liked"><v-icon :color="liked ? 'pink' : 'grey'">mdi-heart</v-icon></button></v-card-actions
        >
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            liked: false,
        }
    },
    props: ['cardTitle', 'cardText']
}
</script>

