<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
</script>

<div class="page home">
  <h1>
    <ProgressiveWriter text={["Thank you!"]} blinker speed={40} />
    <noscript>Hi! I'm <span class="bold accent">Izaak Kuipers</span>.</noscript>
  </h1>
  <p class="subtitle">
    <ProgressiveWriter
      text={[
        "The email has been sent successfully! I'll get back to you as fast as I can.",
      ]}
      speed={20}
      delay={500}
    />
    <noscript>
      The email has been sent successfully! I'll get back to you as fast as I
      can.
    </noscript>
  </p>
</div>
