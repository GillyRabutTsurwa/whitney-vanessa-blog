<script lang="ts">
    import { PortableText } from "@portabletext/svelte";
    import { useSanityImage } from "@/lib/helpers/useSanityImage.js";
    export let data;
    console.log(data);
    const { urlFor } = useSanityImage();
</script>

<div class="authour">
    <div class="authour__content">
        <h4 class="authour__content--title">{data.authour.name}</h4>
        <div class="authour__content--text">
            <PortableText value={data.authour.bio} />
        </div>
    </div>
    <figure class="authour__img">
        <img src={urlFor(data.authour.image)} alt="" />
    </figure>
</div>

<style lang="scss">
    @use "../../../lib/assets/sass/abstracts/" as abstracts;

    .authour {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100vh;

        @include abstracts.breakpoint(1023) {
            grid-template-columns: 1fr;
            grid-template-rows: min-content 1fr;
        }

        &__content {
            padding: 7rem 3rem 0 3rem;
            margin-bottom: 5rem;

            @include abstracts.breakpoint(1023) {
                order: 2;
            }

            &--title {
                font-size: 3rem;
                text-align: center;
                margin-bottom: 2rem;
            }
        }

        &__img {
            position: sticky;
            top: 0;
            height: 100vh;
            overflow: hidden;

            @include abstracts.breakpoint(1023) {
                width: 30rem;
                height: 30rem;
                border-radius: 50%;
                margin: 3rem auto 0 auto;
                order: 1;
            }

            img {
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
        }
    }
</style>
