<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";

  export let t = "";
</script>

<h2>
  <ProgressiveWriter text={[t]} speed={40} delay={300}></ProgressiveWriter>
</h2>
