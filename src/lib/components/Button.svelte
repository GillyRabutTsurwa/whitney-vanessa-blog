<script lang="ts">
    export let text: string = "Read Post";
    export let isLink: boolean = false;
    export let path: string | null = null; //NOTE: solution alternative pour faire non-requiert un prop
    export let colourPrimary: string;
    export let colourSecondary: string;

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
