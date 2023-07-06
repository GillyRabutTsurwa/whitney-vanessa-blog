<script lang="ts">
    import Button from "./Button.svelte";
    import { onMount } from "svelte";
    import { useFetchPosts } from "../helpers/useFetchPosts";
    import { useFormatDate } from "@/lib/helpers/useFormatDate";
    import { useSanityImage } from "@/lib/helpers/useSanityImage";

    const { fetchPosts } = useFetchPosts();
    const { formatDate } = useFormatDate();
    const { urlFor } = useSanityImage();

    const postsPromesse = fetchPosts();
    const textColour = {};

    onMount(() => {
        const body = document.querySelector(".body-tings") as HTMLDivElement;
        const computedStyle = getComputedStyle(body);
        const leftBackgroundColour = computedStyle.getPropertyValue("--left-background-colour");
        const rightBackgroundColour = computedStyle.getPropertyValue("--right-background-colour");

        textColour.primaryColour = getContrastColor(leftBackgroundColour, rightBackgroundColour).colourOne;
        textColour.secondaryColour = getContrastColor(leftBackgroundColour, rightBackgroundColour).colourTwo;

        // NOTE: i think solution is to put this in a store or composable of some sort and globally call it
        function getContrastColor(leftBackgroundColour, rightBackgroundColour) {
            const leftRgb = leftBackgroundColour.match(/\d+/g).map(Number);
            const rightRgb = rightBackgroundColour.match(/\d+/g).map(Number);
            const leftBrightness = (leftRgb[0] * 299 + leftRgb[1] * 587 + leftRgb[2] * 114) / 1000;
            const rightBrightness = (rightRgb[0] * 299 + rightRgb[1] * 587 + rightRgb[2] * 114) / 1000;
            return {
                // colourOne: leftBrightness > rightBrightness ? "rgb(170, 0, 0)" : "rgb(218, 165, 32)",
                // colourTwo: leftBrightness < rightBrightness ? "rgb(170, 0, 0)" : "rgb(218, 165, 32)",
                colourOne: leftBrightness > rightBrightness ? "rgb(23, 23, 23)" : "rgb(222, 222, 222)",
                colourTwo: leftBrightness < rightBrightness ? "rgb(23, 23, 23)" : "rgb(222, 222, 222)",
            };
        }
    });

    export let posts: object[];
    let snippetLength = 300; // NOTE: will soon be computed value

    function getSnippet(blockContent) {
        const body = blockContent
            .filter((block) => block._type === "block")
            .map((block) => block.children.map((child) => child.text).join(""))
            .join("");
        return body.slice(0, snippetLength) + "...";
    }
</script>

<template>
    <h2 style:color={textColour.primaryColour} style="text-align: center; font-size: 6rem; margin: 3.5rem 0;">Posts</h2>
    {#await postsPromesse}
        Fetching Posts
    {:then posts}
        <section class="picture-category">
            {#each posts as currentPost, index}
                <div class="picture-category__caption blog">
                    <div class="picture-category__picture">
                        <img src={urlFor(currentPost.mainImage)} alt="" />
                    </div>

                    <h3 class="picture-category__caption--title" style:color={textColour.primaryColour}>{currentPost.title}</h3>
                    <h5 style="font-weight: 500;" style:color={textColour.primaryColour}>{formatDate(currentPost.publishedAt)}</h5>
                    <div class="picture-category__caption--paragraph" style:color={textColour.primaryColour}>
                        <p>{getSnippet(currentPost.body)}</p>
                    </div>
                    <Button isLink path={`/posts/${currentPost.slug.current}`} colourPrimary="#dedede" colourSecondary="#171717" />
                </div>
            {/each}
        </section>
    {/await}
</template>

<style lang="scss">
    @use "../assets/sass/abstracts" as abstracts;

    // NEW
    .picture-category {
        margin: 3rem 0;
        padding: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        // grid-template-columns: 1fr; will be great for responsiveness
        // -moz-gap: 7rem;
        gap: 8rem 7rem;
        // grid-template-rows: repeat(2, -webkit-min-content);
        // grid-template-rows: repeat(2, min-content);

        @include abstracts.breakpoint(1023) {
            grid-template-columns: 1fr;
            width: 80%;
            margin: 0 auto;
        }

        &.second {
            grid-template-rows: 54rem -webkit-min-content;
            grid-template-rows: 54rem min-content;
        }

        &__picture {
            // WORKS....
            width: 100%;

            img {
                // LIKE GOD!
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
        }

        &__category {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 4rem;
            width: 100%; //TESTING

            &--title {
                align-self: center;
            }

            &--list {
                list-style-type: none;
                width: 70%;
                margin-top: 1.5rem;

                li {
                    margin-bottom: 2rem;
                    background-color: abstracts.$colour-primary;
                    color: abstracts.$whitish;
                    font-weight: bold;
                    padding: 1.1rem 1.5rem;
                    border-radius: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                }
            }
        }

        &__caption {
            // display: flex;
            // flex-direction: column;
            // justify-content: space-between;
            // // align-items: flex-start;
            // align-items: flex-start;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 35rem repeat(4, -webkit-min-content);
            grid-template-rows: 35rem repeat(4, min-content);
            -moz-row-gap: 1.25rem;
            row-gap: 1.25rem;
            justify-items: start;

            @include abstracts.breakpoint(480) {
                grid-template-rows: 20rem repeat(4, -webkit-min-content);
                grid-template-rows: 20rem repeat(4, min-content);
            }

            &--paragraph {
                margin-bottom: 0;
            }
        }

        &__popular-post {
            display: grid;
            // grid-template-rows: -webkit-min-content 5rem -webkit-min-content;
            // grid-template-rows: -webkit-min-content 50rem -webkit-min-content;
            grid-template-rows: -webkit-min-content 20rem -webkit-min-content;
            grid-template-rows: min-content 20rem min-content;

            &--thumbnail {
                -o-object-fit: cover;
                object-fit: cover;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            &--paragraph {
                font-size: 1.4rem;
            }
        }
    }
    h4 {
        position: relative;
        left: 80%;
    }
</style>
