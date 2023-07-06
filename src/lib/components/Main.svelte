<script>
    import PostList from "./PostList.svelte";
    import Pagination from "./Pagination.svelte";
    import { posts } from "../store/posts";

    console.log($posts);

    let currentPage = 1;
    let postsPerPage = 8;

    $: indexOfLastPost = currentPage * postsPerPage;
    $: indexOfFirstPost = indexOfLastPost - postsPerPage;
    $: currentPosts = $posts.slice(indexOfFirstPost, indexOfLastPost);
</script>

<main>
    <PostList posts={$posts} />
</main>
