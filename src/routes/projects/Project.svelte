<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import { projectColorVariations } from "../../ts/projects";
  import type { Project } from "../../types/projects";

  let coloredCss = "";

  export let project: Project;
  export let i: number;

  onMount(() => {
    if (!project.color) return;

    const variations = projectColorVariations(project.color);

    coloredCss = `
      --gradient-transparent: ${variations.gradientTransparent};
      --gradient-color: ${variations.gradientColor};
      --accent: ${variations.accent};
      --text-color: ${variations.textColor};
      --border: ${variations.border};
    `
      .replaceAll("\n", "")
      .replaceAll("  ", "");
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="project"
  style="--background: url({project.image}); {coloredCss}"
  class:colored={!!project.color}
  on:click={() => (location.href = `/projects/details/${i}`)}
>
  <div class="info">
    <h1>
      <a href="/projects/details/{i}">
        <ProgressiveWriter text={[$_(project.name)]} speed={40} delay={300} />
      </a>
    </h1>
    <p class="description">
      {$_(project.description)}
    </p>
    <p class="date">
      <ProgressiveWriter
        text={[dayjs(project.date).format("MMMM YYYY")]}
        delay={500}
        speed={30}
      />
    </p>
  </div>
</div>
