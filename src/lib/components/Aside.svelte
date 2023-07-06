<script>
    import Categories from "./Categories.svelte";
    import FeaturedPost from "./FeaturedPost.svelte";
    import Newsletter from "./Newsletter.svelte";
</script>

<aside>
    <Categories />
    <FeaturedPost />
    <Newsletter />
</aside>

<style lang="scss">
    aside {
        display: flex;
        flex-direction: column;
        margin: 4rem;
    }
</style>
