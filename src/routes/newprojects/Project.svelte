<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
  import type { Project } from "../../types/projects";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { projectColorVariations } from "../../ts/projects";

  let coloredCss = "";

  export let project: Project;

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

<div
  class="project"
  style="--background: url({project.image}); {coloredCss}"
  class:colored={!!project.color}
>
  <div class="info">
    <h1>
      <ProgressiveWriter text={[$_(project.name)]} speed={40} delay={300} />
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
