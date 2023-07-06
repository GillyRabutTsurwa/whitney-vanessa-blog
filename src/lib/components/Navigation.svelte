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
        <!-- <li class="navigation__list--item">
        <NuxtLink :to="`/${$route.name === 'tech' ? 'personal' : 'tech'}`">{{ $route.name === 'tech' ? 'Personal' : 'Tech'
        }} Page</NuxtLink>
      </li> -->
        <li class="navigation__list--item">
            <a href="https://gilbertrabuttsurwa.tech" target="_blank" rel="noreferrer noopener">Portfolio Site</a>
        </li>
        <li class="navigation__list--item">
            <a href="https://gilbertrabuttsurwa-shop.netlify.app" target="_blank" rel="noreferrer noopener">Shop</a>
        </li>
        <li class="navigation__list--item">
            <a href="/">Contact Me</a>
        </li>
    </ul>
    <ul class="navigation__icons">
        <li class="navigation__icons--icon">
            <a href="https://www.facebook.com/rabuttsurwa" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f" />
            </a>
        </li>
        <li class="navigation__icons--icon">
            <a href="https://www.instagram.com/rabuttsurwa96" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram" />
            </a>
        </li>
        <li class="navigation__icons--icon">
            <a href="https://www.instagram.com/rabuttsurwa96" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter" />
            </a>
        </li>
        <li class="navigation__icons--icon">
            <a href="https://open.spotify.com/user/tsurwagilly" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-spotify" />
            </a>
        </li>

        <li class="navigation__icons--icon">
            <a href="https://www.linkedin.com/in/gilberttsurwa" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin" />
            </a>
        </li>
    </ul>
</nav>
