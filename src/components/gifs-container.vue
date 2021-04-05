<template>
  <section class="container">
      <div class="gif-wrapper" v-for="gif in gifs"
          :key="gif.id">
            <img
                class="image"
                @click="onClickGif(gif)"
                :src="gif.images.downsized.url">
      </div>
  </section>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Emit } from "vue-property-decorator";

    @Component
    export default class GiftsContainer extends Vue {
        @Prop({ required: true }) gifs: [];

        @Emit("gifclicked")
        onClickGif(gif: {}): {} {
            return gif;
        }
    }
</script>

<style>
</style>
