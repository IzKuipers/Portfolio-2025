<script lang="ts">
  import { onMount } from "svelte";

  let show = false;
  let x = 0;
  let y = 0;
  let render = false;

  onMount(() => {
    document.addEventListener("mousemove", (e) => {
      show = true;
      setTimeout(() => {
        x = e.clientX;
        y = e.clientY;
      });
    });

    const query = window.matchMedia("(min-width: 750px)");

    query.addEventListener("change", (e) => {
      render = e.matches;
    });

    render = query.matches;
  });
</script>

{#if render}
  <div class="mouse-glow" style="--x: {x}px; --y: {y}px" class:show />
{/if}
