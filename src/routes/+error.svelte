<script lang="ts">
  import { page } from "$app/stores";
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
</script>

<div class="page error">
  <h1>
    <ProgressiveWriter
      text={[$page.status.toString()]}
      blinker
      delay={500}
      speed={100}
    />
  </h1>
  <p class="subtitle">
    {#if $page.error?.message}
      <ProgressiveWriter
        text={[`Error:$$ ${$page.error?.message}`]}
        speed={40}
        delay={1000}
      />
    {/if}
  </p>
</div>
