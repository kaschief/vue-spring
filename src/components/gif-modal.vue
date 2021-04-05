<template>
  <section class="modal">
		<div class="modal-wrapper">

            <button @click="closeModal" type="button" class="close icon" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>

            <p class="text">{{gif.title}}</p>

            <div class="lower">
                <div class="image-wrapper">
                    <img class="image" :src="gif.images.original.url">
                </div>

                <div class="links">
                    <p v-if="!linkCopied" @click="copyText" class="text">Copy Link</p>
                    <div v-else class="link">
                        <p class="text">Link copied!</p>
                        <p class="text">{{link}}</p>
                    </div>
                </div>

            </div>

            <div class="link">
                <p class="text">Source URL: {{gif.url}}</p>
            </div>
		</div>
	</section>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Emit } from "vue-property-decorator";

    @Component
    export default class GifModal extends Vue {
        @Prop({ required: true }) gif: {
            bitly_gif_url: string;
            url: string;
        };
        public linkCopied: boolean = false;
        public link: string = "";

        @Emit("modalclosed")
        closeModal(): boolean {
            return false;
        }

        copyText(): void {
            navigator.clipboard.writeText(this.gif.bitly_gif_url).then(
                () => {
                    this.linkCopied = true;
                    this.link = this.gif.bitly_gif_url;
                },
                (err) => {
                    console.error("Async: Could not copy text: ", err);
                }
            );
        }
    }
</script>

<style>
</style>
