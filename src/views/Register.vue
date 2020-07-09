<template>
    <div>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            Registrate! :)
        <div class="email">
            <input type="email" v-model="email" placeholder="Ingresa un correo electronico">
        </div>
        <div class="password">
            <input type="password" v-model="password" placeholder="Ingresa una contraseña">
        </div>
        <button type="submit" >Registrate!</button>
        </form>
    </div>
</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";
    

    export default {
        methods: {
            async pressed(){
                try {
                                
               const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
               console.log(user)
               this.$router.replace({name:"welcome"});

                } catch (error) {
                    console.log(error)
                }
            }
        },
        data(){
            return{
                email: "",
                password: '',
                error: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>