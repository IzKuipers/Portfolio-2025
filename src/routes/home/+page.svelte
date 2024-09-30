<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
</script>

<div class="page home">
  <h1>
    <ProgressiveWriter
      text={[
        "Hi!$ I'm ",
        { text: "Izaak Kuipers", className: "accent bold" },
        ".",
      ]}
      blinker
      delay={500}
    />
    <noscript>Hi! I'm <span class="bold accent">Izaak Kuipers</span>.</noscript>
  </h1>
  <p class="subtitle">
    <ProgressiveWriter
      text={["And this place is all ", { href: "/about", text: "about me" }]}
      speed={40}
      delay={2800}
    />
    <noscript>And this place is all about me</noscript>
  </p>
</div>
