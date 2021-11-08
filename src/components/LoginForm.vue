<template>
  <h2 class="admin__login-form_signin">Sign In</h2>
  <form @submit="login">
    <label for="username"></label>
    <input
      id="username"
      class="admin__login-form_username"
      type="text"
      placeholder="type your username"
      v-model="username"
      required
    />
    <label for="password"></label>
    <input
      id="password"
      class="admin__login-form_password"
      type="password"
      placeholder="type your password"
      v-model="password"
      required
    />
    <button type="submit" class="submit-button">Submit</button>
  </form>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import jwt from 'jsonwebtoken';
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async login(e) {
      try {
        e.preventDefault();
        console.log(jwt.sign({teste: 'bla'}, process.env.VUE_APP_JWT_SECRET))
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.username,
          this.password
        );
        const user = userCredential.user;
        const localStorage = window.localStorage;
        console.log(user)
        const token = jwt.sign(user, process.env.VUE_APP_JWT_SECRET);
        console.log('token: ', token)
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("token", token)
        this.$router.push("/admin/dashboard");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error: ", errorCode, errorMessage);
      }
    },
  },
};
</script>

<style>
.submit-button {
  border: none;
  padding: 10px;
  width: 100px;
  cursor: pointer;
}
</style>