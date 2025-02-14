<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
</script>

<div class="page error">
  <h1>
    <ProgressiveWriter
      text={["Under Construction"]}
      blinker
      delay={500}
      speed={100}
    />
  </h1>
  <p class="subtitle">
    <ProgressiveWriter text={["¯\\_(ツ)_/¯"]} delay={1000} speed={40} />
  </p>
</div>
