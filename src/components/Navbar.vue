<template>
    <nav>
        <v-app-bar color="primary" app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-regular">Title</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list>
                <v-subheader>Menu</v-subheader>
                <v-list-item-group color="primary">
                    <router-link to="/" class="text-decoration-none">
                        <v-list-item @click="drawer = !drawer">
                            <v-list-item-content><v-list-item-title>Homepage</v-list-item-title></v-list-item-content>
                        </v-list-item>
                    </router-link>
                    <router-link to="/login" class="text-decoration-none">
                        <v-list-item @click="drawer =!drawer">
                            <v-list-item-content><v-list-item-title>Login</v-list-item-title></v-list-item-content>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
        }
    },
}
</script>

<style>
</style>
