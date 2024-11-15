<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>Thank You :D - Izaak Kuipers</title>
</svelte:head>

<div class="page home">
  <div class="hero">
    <h1>
      <ProgressiveWriter
        text={[$_("contact.direct.thankyou.title")]}
        blinker
        speed={40}
      />
    </h1>
    <p class="subtitle">
      <ProgressiveWriter
        text={[$_("contact.direct.thankyou.message")]}
        speed={20}
        delay={500}
      />
    </p>
  </div>
</div>
