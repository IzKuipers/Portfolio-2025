<script lang="ts">
  import { onMount } from "svelte";
  import { Sleep } from "../ts/sleep";
  import { ProgressiveWriter } from "../ts/writer";
  import type { TypeNode } from "../types/writer";

  export let delay = 0;
  export let speed = 100;
  export let text: (TypeNode | string)[] = [];
  export let blinker = false;

  let target: HTMLSpanElement;

  onMount(async () => {
    const writer = new ProgressiveWriter(target);

    await Sleep(delay);
    await writer.speedControlledWrite(speed, text);
  });
</script>

<span bind:this={target} class="progressive-writer" class:blinker>
  <div class="hidden">#</div>
</span>
