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
import jwt from "jsonwebtoken";
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
        const { auth, userCredential } = await this.signInFirebase();
        this.settingToLocalStorage(userCredential);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error: ", errorCode, errorMessage);
      }
    },
    async signInFirebase() {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        this.username,
        this.password
      );
      return {
        auth,
        userCredential,
      };
    },

    settingToLocalStorage(userCredential) {
      const user = userCredential.user;
      const localStorage = window.localStorage;
      localStorage.setItem("accessToken", user.accessToken);
      this.$router.push("/admin/dashboard");
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
