<script lang="ts">
    import Button from "./Button.svelte";
    import { useFetchPosts } from "../helpers/useFetchPosts";
    import { useSanityImage } from "../helpers/useSanityImage";

    const { fetchRandomPost } = useFetchPosts();
    const { urlFor } = useSanityImage();
    const postPromesse = fetchRandomPost();
    console.log(postPromesse);

    let snippetLength = 300;
    // move this. je l'utilise d'ailleurs
    function getSnippet(blockContent) {
        const body = blockContent
            .filter((block) => block._type === "block")
            .map((block) => block.children.map((child) => child.text).join(""))
            .join("");
        return body.slice(0, snippetLength) + "...";
    }
</script>

<h2 style="text-align: center;">Featured Post</h2>
{#await postPromesse}
    <h5>Fetching Featured Post</h5>
{:then post}
    <section>
        <figure>
            <img src={urlFor(post.mainImage)} alt="" />
        </figure>
        <h3>{post.title}</h3>
        <p>{getSnippet(post.body)}</p>
        <Button isLink path={`/posts/${post.slug.current}`} colourPrimary="#171717" colourSecondary="#dedede" />
    </section>
{/await}

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    figure {
        width: 90%;
        height: 40rem;
        margin: 3rem auto;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            -o-object-fit: cover;
        }
    }
    p {
        margin-bottom: 4rem;
    }
</style>
