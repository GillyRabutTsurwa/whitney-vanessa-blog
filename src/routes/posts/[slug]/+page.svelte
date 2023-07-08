<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import { PortableText } from "@portabletext/svelte";
    import { useFormatDate } from "@/lib/helpers/useFormatDate.js";
    import { useSanityImage } from "@/lib/helpers/useSanityImage.js";

    const { formatDate } = useFormatDate();
    const { urlFor } = useSanityImage();

    export let data;
    console.log(data);
</script>

<article class="blog-container">
    <figure class="blog-img-container">
        <img src={urlFor(data.post.mainImage)} alt="" />
    </figure>

    <div class="blog-content">
        <Button isLink path="/posts/" text="All Posts" colourPrimary="#171717" colourSecondary="#dedede" />
        <h1 class="blog-content__title">{data.post.title}</h1>
        <h3 class="blog-content__author">
            <span>By: </span>
            <a href={`/authours/${data.post.authour.slug.current}`}>
                <span>{data.post.authour.name}</span>
            </a>
        </h3>
        <h3 class="blog-content__date-published">
            <span>Date Published: </span>
            <span>{formatDate(data.post.publishedAt)}</span>
        </h3>
        <div class="blog-content__description">
            <PortableText value={data.post.body} />
        </div>
        <Button isLink path="/posts/" text="All Posts" colourPrimary="#171717" colourSecondary="#dedede" />
    </div>
</article>

<style lang="scss">
    @use "../../../lib/assets/sass/abstracts/" as abstracts;

    .blog-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
        height: 100vh;
        background-color: #f0f0f0;

        @include abstracts.breakpoint(1023) {
            grid-template-columns: 1fr;
            grid-template-rows: 35% 1fr;
            min-height: 100vh;
        }

        @include abstracts.breakpoint(480) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }

        .blog-img-container {
            position: sticky;
            top: 0;
            height: 100vh;
            overflow: hidden;

            @include abstracts.breakpoint(1023) {
                position: relative;
                grid-row: 1 / 2;
                height: 100%;
            }

            img {
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
        }

        .blog-content {
            position: relative;
            padding: 4rem 3rem 2rem 3rem;
            overflow: hidden scroll;

            @include abstracts.breakpoint(1023) {
                grid-row: 2 / 3;
            }

            &__title,
            &__author,
            &__date-published {
                @include abstracts.breakpoint(480) {
                    text-align: center;
                }
            }

            &__title {
                font-weight: bolder;
                font-size: 5rem;
                margin: 4.5rem 0 1rem 0;
            }

            &__author,
            &__date-published {
                font-style: italic;
                color: #888;
                font-weight: normal;
            }

            &__author {
                a,
                a:link,
                a:visited {
                    color: currentColor;
                    text-decoration: underline;
                }
            }

            &__description {
                font-size: 1.75rem;
                margin: 3rem 0;
                line-height: 1.5;
                color: #333;
            }
        }
    }
</style>
