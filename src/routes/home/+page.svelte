<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
  import AnimatedLogo from "./AnimatedLogo.svelte";
</script>

<svelte:head>
  <title>{$_("home._name")} - Izaak Kuipers</title>
</svelte:head>

<div class="page home">
  <div class="hero">
    <AnimatedLogo />
    <h1>
      <ProgressiveWriter
        text={[
          $_("home.hero.top"),
          { text: $_("home.hero.name"), className: "accent bold" },
          ".",
        ]}
        blinker
        delay={500}
      />
    </h1>
    <p class="subtitle">
      <ProgressiveWriter
        text={[$_("home.hero.bottom")]}
        speed={40}
        delay={2000}
      />
    </p>
  </div>
  <footer>
    &copy; {$_("me")} 2025 &mdash;&nbsp;
    <a
      href="https://github.com/IzKuipers"
      class="lucide icon-github"
      aria-label="GitHub"
      title="GitHub"
    ></a>
  </footer>
</div>
