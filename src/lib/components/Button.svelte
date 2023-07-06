<script>
    export let text = "Read Post";
    export let isLink = false;
    export let path;
    export let colourPrimary;
    export let colourSecondary;

    let isHovered = false;

    $: backgroundColor = isHovered ? colourSecondary : colourPrimary;
    $: color = isHovered ? colourPrimary : colourSecondary;
    $: console.log(isHovered);
</script>

{#if isLink}
    <a
        href={isLink ? path : null}
        on:mouseenter={() => (isHovered = true)}
        on:mouseleave={() => (isHovered = false)}
        class="button"
        style:color
        style:background-color={backgroundColor}
    >
        {text}
    </a>
{:else}
    <button
        on:mouseenter={() => (isHovered = true)}
        on:mouseleave={() => (isHovered = false)}
        class="button"
        style:color
        style:background-color={backgroundColor}
    >
        {text}
    </button>
{/if}

<style lang="scss">
    @use "../assets/sass/abstracts/" as abstracts;

    .button {
        @include abstracts.button-config(1.5rem, 2.2rem, 0.5rem);
        font-size: 1.6rem;
        text-decoration: none;
        border: 2px solid transparent;
        transition: transform 0.5s ease;
        font-family: inherit;

        //NOTE: ça, je vais faire avec css et pas Javascript. pour mes besoins
        // dans ce cas-ci, je veux que la couleur du contour ne change pas
        &:hover,
        &:active {
            border: 2px solid #171717;
        }
    }
</style>
