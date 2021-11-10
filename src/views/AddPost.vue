<template>
  <section class="addPost">
    <form class="addPost__form">
      <div class="addPost__form_input">
        <Input
          name="title"
          placeholder="bla"
          label="Digite o Título"
          :text="text"
          @titleType="titleTyped"
        />
      </div>
      <div class="addPost__form_text">
        <TextArea
          label="Escreva seu post abaixo"
          v-model="text"
          @update:modelValue="textTyped"
        ></TextArea>
      </div>
      <button class="addPost__form_submit">Create</button>
    </form>
  </section>
  {{text}}
</template>

<script>
import Input from "../components/Input.vue";
import TextArea from "../components/TextArea.vue";
export default {
  components: { Input, TextArea },
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    titleTyped(text) {
      this.title = text;
    },

    textTyped(text) {
      console.log("text: ", text);
    },
  },
};
</script>

<style lang="scss">
.addPost {
  &__title {
    margin-bottom: 100px;
  }

  &__form{
    &_input{
      margin-bottom: 100px;
    }

    &_text{
      margin: 20px;
    }

    &_submit{
      border: none;
      padding: 10px 20px;
      font-size: 20px;
    }
  }
}
</style>