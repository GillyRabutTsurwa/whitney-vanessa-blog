<script lang="ts">
    export let portableText;
    console.log(portableText);
</script>

<p>
    <slot />
</p>

<style>
    p {
        margin: 3rem 0;
    }
</style>
