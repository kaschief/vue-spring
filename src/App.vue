<template>
  <div class="home" v-if="renderDisplay">

	<div class="bar">
		<input
			v-model="searchTerm"
			placeholder="What's your GIF today?"
			>

		<button
			type="button"
			class="btn btn-primary"
			@click="getGifs">Search</button>
	</div>


	<gifs-container
		:gifs="paginatedResults"
		@gifclicked="onGifClicked($event)"
	/>

	<gif-modal
		v-if="showModal"
		:gif="gif"
		@modalclosed="onModalClosed($event)"

	></gif-modal>

	<pagination
		v-if="showPagination"
		:number-of-pages="numberOfPages"
		:current-page="currentPage"
		@pagechanged="onPageChange($event)"
	/>

  </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from "vue-property-decorator";
    import Pagination from "./components/pagination.vue";
    import GifsContainer from "./components/gifs-container.vue";
    import GifModal from "./components/gif-modal.vue";
    import axios from "axios";

    @Component({
        components: {
            GifsContainer,
            Pagination,
            GifModal,
        },
    })
    export default class App extends Vue {
        public searchTerm: string = "";
        public trimmedSearchTerm: string = "";
        public loadedResults: any[] = [];
        public filteredResults: any[] = [];
        public searchResults: any[] = [];
        public filtered: boolean = false;
        public searched: boolean = false;
        public numberOfResults: number = 0;
        public currentPage: number = 1;
        public itemsPerPage: number = 20;
        public api_key: string = "pd58UnrmMGavr28zcKkMmtZmupnyHjzw";
        public gif: {} = {};
        public showModal: boolean = false;

        mounted() {
            axios
                .get(
                    `https://api.giphy.com/v1/gifs/trending?api_key=${this.api_key}`
                )
                .then((response) => {
                    this.loadedResults = response.data.data;
                    this.numberOfResults = response.data.pagination.total_count;
                });
        }

        get displayedResults(): any[] {
            return this.searched
                ? this.searchResults
                : this.filtered
                ? this.filteredResults
                : this.loadedResults;
        }

        get numberOfPages(): number {
            return Math.ceil(this.loadedResults.length / this.itemsPerPage);
        }

        get showPagination(): boolean {
            return !this.filtered || this.searched;
        }

        get paginatedResults(): any[] {
            const start = (this.currentPage - 1) * this.itemsPerPage,
                end = start + this.itemsPerPage;

            return this.displayedResults.slice(start, end);
        }

        get renderDisplay(): boolean {
            return this.loadedResults.length > 0;
        }

        getGifs(): void {
            if (this.trimmedSearchTerm === "") {
                window.location.reload();
            } else
                axios
                    .get(
                        `https://api.giphy.com/v1/gifs/search?api_key=${this.api_key}&q=${this.trimmedSearchTerm}`
                    )
                    .then((response) => {
                        this.searchResults = response.data.data;
                        this.searched = true;
                    });
        }

        onPageChange(page: number): void {
            this.currentPage = page;
        }

        onGifClicked(gif: {}): void {
            this.gif = gif;
            this.showModal = true;
        }

        onModalClosed(): void {
            this.showModal = false;
        }

        @Watch("searchTerm")
        trimSearch(): void {
            this.trimmedSearchTerm = this.searchTerm.trim();
            this.currentPage = 1;
        }
        @Watch("trimmedSearchTerm")
        filterResults(): void {
            if (this.trimmedSearchTerm !== "") {
                this.filtered = true;
            } else this.filtered = false;

            this.filteredResults = this.loadedResults.filter(
                (result: { title: string }) =>
                    result.title.toLowerCase().includes(this.trimmedSearchTerm)
            );
        }
    }
</script>

<style>
</style>
