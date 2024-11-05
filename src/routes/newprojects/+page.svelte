<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
  import { Projects } from "../../ts/stores/projects";
  import Project from "./Project.svelte";
</script>

<svelte:head>
  <title>{$_("projects.gallery.name")} - Izaak Kuipers</title>
</svelte:head>

<div class="page new-projects">
  <h1>
    <ProgressiveWriter
      text={[$_("projects.gallery.name")]}
      speed={40}
      delay={300}
    />
  </h1>
  <p>
    {$_("projects.gallery.text")}
  </p>
  {#each Projects as project, i}
    <Project {project} {i} />
  {/each}
</div>
