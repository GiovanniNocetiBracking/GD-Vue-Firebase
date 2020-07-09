<template>
    <div>
        Login
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="Ingresa tu correo electronico" v-model="email">
            </div>
            <div class="passwor">
                <input type="password" placeholder="Ingresa tu contraseña" v-model="password">
            </div>
            <button type="submit">Ingresar</button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span>Registrate --> <router-link to="/register" >REGISTRARME</router-link></span>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
    export default {
        data(){
            return{
                email:'',
                password:'',
                error:''
            }
        },
        methods: {
            async pressed(){
                try {
                    const login = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    console.log(login)
                    this.$router.replace({name: "welcome"})
                } catch (error) {
                    console.log(error)         
                }
                }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>