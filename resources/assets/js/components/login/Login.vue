<template>
    <v-container>
        <v-form >
            <v-text-field
                    v-model="form.email"
                    label="Name"
                    type="email"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="form.password"
                    label="Password"
                    required
            ></v-text-field>
            <v-btn color="green" type="submit" @click.prevent="login">Login</v-btn>
        </v-form>

    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                form:{
                    email:'',
                    password:''
                }
            }
        },

        methods:{
            login(){
                this.$store.dispatch('login',this.form);
            }
        },
    }
</script>

<style scoped>

</style>