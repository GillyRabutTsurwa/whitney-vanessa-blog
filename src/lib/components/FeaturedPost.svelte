<script>
    import Button from "./Button.svelte";
</script>

<h2>Featured Post</h2>
<section>
    <figure>
        <img src="https://source.unsplash.com/random/?city,night" alt="" />
    </figure>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quaerat, odit, perspiciatis sequi ipsa at, earum repellat tenetur architecto
        qui consequatur. Officia temporibus odio aliquam officiis ducimus adipisci itaque esse exercitationem tenetur assumenda vel aliquid veritatis
        accusamus earum vitae eveniet alias, quia, neque possimus provident ea iusto corrupti dicta. Non quas architecto doloremque earum tempora vel
        et eaque perspiciatis debitis doloribus repudiandae harum amet inventore, reiciendis veniam voluptatibus beatae! Magnam necessitatibus
        cupiditate totam, culpa recusandae soluta aut aliquam eveniet enim quam exercitationem voluptas at magni cum dolores tempore hic numquam!
        Eligendi illum distinctio odio repellat voluptate blanditiis ullam reprehenderit fugit!
    </p>
    <!-- <Button isLink path={`/posts/${currentPost.slug.current}`} colourPrimary="#dedede" colourSecondary="#171717" /> -->
    <Button isLink path={`/`} colourPrimary="#171717" colourSecondary="#dedede" />
</section>

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
