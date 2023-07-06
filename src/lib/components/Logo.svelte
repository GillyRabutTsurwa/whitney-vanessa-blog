<script>
    import img from "../assets/img/logo.svg";
</script>

<figure>
    <a href="/">
        <img src={img} alt="" />
    </a>
</figure>

<style lang="scss">
    figure {
        display: inline-block;
        width: 8rem;
        height: 8rem;
        z-index: 1000;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
