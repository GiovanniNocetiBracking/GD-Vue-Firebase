<template>
    <div>
        Logged in!
        <span v-if="loggedIn">yes</span>
        <span v-else>no</span>
        <div>
            <button @click="signOut">Desconectarse</button>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

    export default {
        created(){
            firebase.auth().onAuthStateChanged(user => {
                this.loggedIn = !!user;
                /*if (user){
                    this.loggedIn = true;
                }else{
                    this.loggedIn = false;
                }*/
            })
        },
        data(){
            return{
                loggedIn: false
            }
        },
        methods:{
            async signOut(){
                try {
                const data = await firebase.auth().signOut();    
                console.log(data)
                this.$router.replace({name: "login"})
                } catch (error) {
                    console.log(error)
                }
                
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>