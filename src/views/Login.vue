<template>
    <Dialog dialogTitle="Login">
        <template v-slot:dialogText>
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field label="Userid" v-model="loginUser"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field label="Email*" v-model="loginEmail"></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
        </template>
        <template v-slot:dialogAction>
            <router-link to="/">
                <v-btn class="mr-5" min-width="100">cancel</v-btn>
            </router-link>
            <v-btn min-width="100" @click="loginAction" color="primary">login</v-btn>
        </template>
    </Dialog>
</template>

<script>
import axios from "axios"
import Dialog from "../components/Dialog.vue"
export default {
    data() {
        return {
            loginUser: "",
            loginEmail: "",
            UserfromApi: "",
            EMailfromApi: "",
        }
    },
    methods: {
        loginAction() {
            this.contactApi()
            console.log(this.loginEmail, this.EMailfromApi)
            if(this.loginEmail == this.EMailfromApi) console.log(this.loginEmail, this.EMailfromApi)
            localStorage.setItem("loginUser", this.loginUser)
            localStorage.setItem("loginEmail", this.loginEmail)
            this.loginUser = ""
            this.loginEmail = ""
        },
        contactApi() {
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.loginUser}`).then((res) => {
                this.UserfromApi = res.data.id
                this.EMailfromApi = res.data.email
            })
        },
    },
    components: { Dialog },
}
</script>
