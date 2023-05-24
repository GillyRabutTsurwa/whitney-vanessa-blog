<script>
<<<<<<< HEAD
    import Navigation from "../lib/components/Navigation.svelte";
    import Header from "../lib/components/Header.svelte";
    import Main from "../lib/components/Main.svelte";
    import Aside from "../lib/components/Aside.svelte";
    import Categories from "../lib/components/Categories.svelte";
=======
>>>>>>> 629cb9d (Created Necessary Files & Components, All Empty)
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<<<<<<< HEAD
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
        --right-background-colour: rgb(222, 222, 222);
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
=======
<section>
    <h1>Svelte App</h1>

    <h2>
        try editing <strong>src/routes/+page.svelte</strong>
    </h2>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
>>>>>>> 629cb9d (Created Necessary Files & Components, All Empty)
    }
</style>
