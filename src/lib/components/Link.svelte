<!-- AbsoluteURL (custom mark) -->
<script lang="ts">
    import type { MarkComponentProps } from "@portabletext/svelte";

    // Property custom marks receive from @portabletext/svelte when redered
    export let portableText: MarkComponentProps<{
        url?: string;
        newWindow?: boolean;
    }>;

    // Remember to make your variables reactive so that they can reflect prop changes
    // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
    $: ({ value } = portableText);
    $: newWindow = value.newWindow || false;

    console.log("----------00----------00---------");
    console.log(portableText);
</script>
