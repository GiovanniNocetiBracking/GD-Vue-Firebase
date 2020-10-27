<template>
  
    <div class="container-fluid  ">
      <div class=" mt-16 row-cols ">
        
          <form @submit.prevent="pressed" class=" border p-3">
            <div class="form-group  mt-10 ">
              <h1>Iniciar sesion</h1>

              <div class="form-group ">
                <label>Email</label>
                <input type="email" class="form-control form-control" v-model="email" />
              </div>

              <div class="form-group ">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control" v-model="password" />
              </div>

              <button type="submit" class="btn btn-dark btn-lg btn-block">Iniciar sesion</button>

              <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/#">¿Olvidaste tu contraseña?</router-link>
              </p>
            </div>
          </form>
        
      </div>
      <div class="error" v-if="error">{{error.message}}</div>
    </div>

    
  
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const login = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(login);
        this.$router.replace({ name: "welcome" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 450px;
  min-height: 100vh;
  border: none;
}
.responsive {
  display: inline-block;
  position: relative;
  width: 100%;
  background: url("https://s20.postimg.org/o09gf7fvx/bag.jpg") no-repeat center
    top;
  background-size: contain;
}
</style> 
