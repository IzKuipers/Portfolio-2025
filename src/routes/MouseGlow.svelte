<script lang="ts">
  import { onMount } from "svelte";

  let show = false;
  let x = 0;
  let y = 0;

  onMount(() => {
    document.addEventListener("mousemove", (e) => {
      show = true;
      setTimeout(() => {
        x = e.clientX;
        y = e.clientY;
      }, 0);
    });
  });
</script>

<div class="mouse-glow" style="--x: {x}px; --y: {y}px" class:show />
