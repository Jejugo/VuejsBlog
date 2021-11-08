<template>
  <section class="admin">
    <div class="admin__login-form">
      <LoginForm></LoginForm>
    </div>
  </section>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  components: { LoginForm },
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
.admin {
  display: flex;
  justify-content: center;
  &__login-form {
    width: 15vw;
    height: 35vh;

    padding: 0 20px;
    box-sizing: border-box;

    &_signin {
      margin-bottom: 20%;
    }

    &_username,
    &_password {
      display: block;
      margin: 20px auto;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      width: 80%;
      border-bottom: 1px solid #ddd;
      outline: none;
      font-size: $MEDIUM;
    }
  }
}
</style>