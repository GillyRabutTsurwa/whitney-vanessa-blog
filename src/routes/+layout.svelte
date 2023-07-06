<script>
    import "@/lib/assets/sass/main.scss";
    import Navigation from "@/lib/components/Navigation.svelte";
    // import { onMount } from "svelte";

    // let textColor;

    // onMount(() => {
    //     const body = document.querySelector(".app");
    //     const computedStyle = getComputedStyle(body);
    //     const backgroundColor = computedStyle.backgroundColor;
    //     textColor = getContrastColor(backgroundColor);

    //     function getContrastColor(backgroundColor) {
    //         const rgb = backgroundColor.match(/\d+/g);
    //         const [r, g, b] = rgb.map(Number);
    //         const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    //         return brightness > 125 ? "black" : "white";
    //     }
    // });
</script>

<Navigation />
<div class="app">
    <slot />
</div>

<style lang="scss">
    @use "../lib/assets/sass/abstracts/" as abstracts;

    :global(.body-tings) {
        // --left-background-colour: rgb(170, 0, 0);
        // --right-background-colour: rgb(218, 165, 32);
        --left-background-colour: rgb(23, 23, 23);
        --right-background-colour: rgb(222, 222, 222);
    }

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        /* height: 100%; */
        // background: linear-gradient(to right, #aa0000 0%, #aa0000 50%, abstracts.$kibichi 50%, abstracts.$kibichi 100%);
        background: linear-gradient(
            to right,
            var(--left-background-colour) 0%,
            var(--left-background-colour) 70%,
            var(--right-background-colour) 70%,
            var(--right-background-colour) 100%
        );
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>
