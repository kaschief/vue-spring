<template>
<div class="pagination">

    <button
      v-if="showFirst"
      type="button"
      class="btn btn-primary"
      @click="onClickFirstPage"
      aria-label="Go to first page"
    >
      First
    </button>


    <button
      v-for="(page, index) in pages" :key="index"
      type="button"
      class="btn btn-primary"
      @click="onClickPage(page.name)"
      :disabled="page.isDisabled"
      :class="{ active: isPageActive(page.name) }"
      :aria-label="`Go to page number ${page.name}`"

    >
      {{ page.name }}
    </button>


    <button
      v-if="showLast"
      type="button"
      class="btn btn-primary"
      @click="onClickLastPage"
      aria-label="Go to last page"
    >
      Last
    </button>
  </div>

</template>

<script lang='ts'>
    import { Vue, Component, Prop, Emit } from "vue-property-decorator";

    @Component
    export default class Pagination extends Vue {
        @Prop({ required: true }) numberOfPages: number;
        @Prop({ required: true, default: 1 }) currentPage: number;

        get pages() {
            const range = [];

            let maxLeft = this.currentPage - Math.floor(3 / 2);
            let maxRight = this.currentPage + Math.floor(3 / 2);

            if (maxLeft < 1) {
                maxLeft = 1;
                maxRight = 3;
            }

            if (maxRight > this.numberOfPages) {
                maxLeft = this.numberOfPages - (3 - 1);
                maxRight = this.numberOfPages;
                if (maxLeft < 1) {
                    maxLeft = 1;
                }
            }

            for (let i = maxLeft; i <= maxRight; i++) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage,
                });
            }

            return range;
        }
        get showFirst(): boolean {
            return this.currentPage > 2;
        }

        get showLast(): boolean {
            return this.currentPage < this.numberOfPages;
        }

        @Emit("pagechanged")
        onClickFirstPage(): number {
            return 1;
        }

        @Emit("pagechanged")
        onClickPage(page: number): number {
            return page;
        }

        @Emit("pagechanged")
        onClickLastPage(): number {
            return this.numberOfPages;
        }

        isPageActive(page: number) {
            return this.currentPage === page;
        }
    }
</script>

<style></style>
