<script lang="ts">
    import { posts } from "../store/posts";
    import { useFetchPosts } from "../helpers/useFetchPosts";
    import { onDestroy } from "svelte";

    const { fetchPosts, filterPosts } = useFetchPosts();
    let postsArr: any[] = [];

    const unsubscribe = posts.subscribe(async (storeValue) => {
        storeValue = await fetchPosts();
        postsArr = storeValue;
        console.log(postsArr);
    });

    $: categories = postsArr.map((currentPost) => currentPost.categories);
    $: categoriesList = [...new Set(categories.flat())];

    function getNumOfPostsByCategory(category) {
        return postsArr.filter((currentPost) => currentPost.categories.includes(category)).length;
    }

    async function testFilter(category) {
        await filterPosts(category); //NOTE: doesn't work for now
    }

    onDestroy(unsubscribe); //NOTE: store data cleanup
</script>

<div class="category">
    <h4 class="category__title">Category</h4>
    <ul class="category__list">
        {#each categoriesList as currentCategory}
            <li on:click={() => testFilter(currentCategory)}>
                <span>{currentCategory}</span>
                <span>({getNumOfPostsByCategory(currentCategory)})</span>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    @use "../assets/sass/abstracts/" as abstracts;

    .category {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 4rem 0;
        width: 100%; //TESTING

        &__title {
            align-self: center;
        }

        &__list {
            list-style-type: none;
            width: 70%;
            margin-top: 1.5rem;

            li {
                margin-bottom: 2rem;
                // background-color: abstracts.$colour-primary;
                background-color: rgb(23, 23, 23);
                color: abstracts.$whitish;
                // font-weight: bold;
                padding: 1.1rem 1.5rem;
                border-radius: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
            }
        }
    }
</style>
