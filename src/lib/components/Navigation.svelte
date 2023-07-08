<script>
    import Logo from "./Logo.svelte";
</script>

<nav class="navigation">
    <Logo />
    <ul class="navigation__list">
        <li class="navigation__list--item">
            <a href="/">Blogs</a>
        </li>
        <li class="navigation__list--item">
            <a href="/">About Me</a>
        </li>
        <li class="navigation__list--item">
            <a href="/contact">Contact Me</a>
        </li>
    </ul>
    <ul class="navigation__icons">
        <li class="navigation__icons--icon">
            <a href="https://www.facebook.com/whitney.vanessa.18" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f" />
            </a>
        </li>
        <li class="navigation__icons--icon">
            <a href="https://www.instagram.com/realwhitneyvanessa/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram" />
            </a>
        </li>
        <li class="navigation__icons--icon">
            <a href="https://twitter.com/whithaider" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter" />
            </a>
        </li>
        <!-- <li class="navigation__icons--icon">
            <a href="https://open.spotify.com/user/tsurwagilly" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-spotify" />
            </a>
        </li> -->
        <li class="navigation__icons--icon">
            <a href="https://www.linkedin.com/in/whitney-vanessa-336820172/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin" />
            </a>
        </li>
    </ul>
</nav>
