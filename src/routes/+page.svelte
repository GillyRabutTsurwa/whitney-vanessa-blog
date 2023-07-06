<script>
    import Navigation from "../lib/components/Navigation.svelte";
    import Header from "../lib/components/Header.svelte";
    import Main from "../lib/components/Main.svelte";
    import Aside from "../lib/components/Aside.svelte";
    import Categories from "../lib/components/Categories.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<Navigation />
<Header />
<div class="body-tings">
    <Main />
    <Aside />
</div>

<style lang="scss">
    @use "../lib/assets/sass/abstracts" as abstracts;

    :global(.body-tings) {
        // --left-background-colour: rgb(170, 0, 0);
        // --right-background-colour: rgb(218, 165, 32);
        --left-background-colour: rgb(23, 23, 23);
        --right-background-colour: rgb(240, 240, 240);
    }

    .body-tings {
        display: grid;
        grid-template-columns: 70% 1fr;
        background: linear-gradient(
            to right,
            var(--left-background-colour) 0%,
            var(--left-background-colour) 70%,
            var(--right-background-colour) 70%,
            var(--right-background-colour) 100%
        );

        @include abstracts.breakpoint(1023) {
            flex-direction: column;
        }
    }
</style>
