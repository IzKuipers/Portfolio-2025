<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$_("contact.direct.failed.title")} - Izaak Kuipers</title>
</svelte:head>

<div class="page home">
  <div class="hero">
    <h1>
      <ProgressiveWriter
        text={[$_("contact.direct.failed.title")]}
        blinker
        speed={40}
      />
    </h1>
    <p class="subtitle">
      <ProgressiveWriter
        text={[$_("contact.direct.failed.text")]}
        speed={20}
        delay={500}
      />
    </p>
  </div>
</div>
