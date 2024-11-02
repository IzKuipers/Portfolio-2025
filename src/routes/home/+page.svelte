<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
  import AnimatedLogo from "./AnimatedLogo.svelte";
</script>

<svelte:head>
  <title>{$_("home._name")} - Izaak Kuipers</title>
</svelte:head>

<div class="page home">
  <AnimatedLogo />
  <h1>
    <ProgressiveWriter
      text={[
        $_("home.hero.top"),
        { text: "Izaak Kuipers", className: "accent bold" },
        ".",
      ]}
      blinker
      delay={500}
    />
  </h1>
  <p class="subtitle">
    <ProgressiveWriter
      text={[
        $_("home.hero.bottom.text"),
        { href: "/about", text: $_("home.hero.bottom.link") },
      ]}
      speed={40}
      delay={2800}
    />
  </p>
</div>
