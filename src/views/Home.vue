<template>
  <section class="content">
    <div class="content__post main">
      <img
        class="content__post_image"
        src="https://www.nacionalidadeportuguesa.com.br/wp-content/uploads/2020/08/tech-visa-portugal.png"
      />
      <h3>blabla</h3>
    </div>
    <div class="content__post">
      <span class="content__post_title">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
        totam sunt quae officia illum dolorem delectus dolor? Dicta, esse,
        quidem harum veniam et vero asperiores id cum delectus temporibus
        doloremque excepturi amet sed in fugiat nesciunt accusamus ipsam eius
        adipisci molestiae assumenda natus? Dignissimos reprehenderit fugit non,
        est earum ea.
      </span>
    </div>
    <div class="content__post">
      <span class="content__post_title"
        >!!!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        magnam distinctio nihil vitae ipsum cupiditate facere odio nemo
        suscipit, dolorem ad natus, molestias aut enim amet facilis iure
        consequatur exercitationem?</span
      >
    </div>
    <div class="content__post">
      <span class="content__post_title">
        --> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        alias minima incidunt quos esse voluptates delectus inventore
        dignissimos soluta, dolorum omnis facilis quidem ullam atque iste porro
        nam repellendus doloremque aut, minus mollitia animi culpa? Cum, modi!
        Magni, illo perferendis.
      </span>
    </div>
    <div class="content__post">
      <span class="content__post_title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias
        minima incidunt quos esse voluptates delectus inventore dignissimos
        soluta, dolorum omnis facilis quidem ullam atque iste porro nam
        repellendus doloremque aut, minus mollitia animi culpa? Cum, modi!
        Magni, illo perferendis.
      </span>
    </div>
    <div class="content__post">
      <span class="content__post_title">
        --> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        alias minima incidunt quos esse voluptates delectus inventore
        dignissimos soluta, dolorum omnis facilis quidem ullam atque iste porro
        nam repellendus doloremque aut, minus mollitia animi culpa? Cum, modi!
        Magni, illo perferendis.
      </span>
    </div>
    <div class="content__post">
      --> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias
      minima incidunt quos esse voluptates delectus inventore dignissimos
      soluta, dolorum omnis facilis quidem ullam atque iste porro nam
      repellendus doloremque aut, minus mollitia animi culpa? Cum, modi! Magni,
      illo perferendis.
    </div>
  </section>
  <Section title="Front End"></Section>
  <Section title="Back End"></Section>
  <Section title="Devops"></Section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Section from "../components/Section.vue";

export default defineComponent({
  name: "Home",
  components: { Section }
});
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  margin-bottom: 5vh;

  &__post:nth-child(odd) {
    background-color: rgb(199, 197, 197);
  }

  &__post {
    cursor: pointer;
    &.main {
      color: white;
      grid-column: 1/3;
      grid-row: 1/4;
    }

    &.main img {
      width: 100%;
      max-width: 600px;
      height: auto;
    }

    &_title {
      opacity: 0.7;
    }

    &_title:hover {
      opacity: 1;
      transition: 0.3s ease;
    }
  }
}
</style>
