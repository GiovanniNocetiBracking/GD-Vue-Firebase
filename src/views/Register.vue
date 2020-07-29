<template>
     <div class="register">
         <div v-if="error" class="error">{{error.message}}</div>
        <form form @submit.prevent="pressed" class="border p-3 form">
            <div class="form-group">
            <h1>Registro de usuarios</h1>

            <div class="form-group">
                <label>Email</label>
                <input required type="email" class="form-control form-control-lg" v-model="email"/>
            </div>

            <div class="form-group">
                <label >Contraseña</label>
                <input required type="password" class="form-control form-control-lg" v-model="password" />
            </div>
             <div class="form-group">
                <label>Confirmar contraseña</label>
                <input  type="password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Ingrese su codigo Gas Detect</label>
                <input required type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Resgistrarme</button>

                   
            </div>
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
 .form {
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:450px;
  min-height: 100vh;
  border: none;
}
</style>