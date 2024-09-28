<script lang="ts">
  import { onMount } from "svelte";
  import type { TypeNode } from "../types/writer";
  import { ProgressiveWriter } from "../ts/writer";
  import { Sleep } from "../ts/sleep";

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
