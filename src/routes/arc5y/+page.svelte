<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { content, error } = data;
</script>

<div class="page arc-5y">
  <h1>ArcOS turned 5!</h1>
  {#if !error}
    <div class="markdown-renderer">
      <SvelteMarkdown source={content} />
    </div>
  {:else}
    404 {error}
  {/if}
</div>
