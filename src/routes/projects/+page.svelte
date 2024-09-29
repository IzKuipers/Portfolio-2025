<script>
  import dayjs from "dayjs";
  import { Projects } from "../../ts/stores/projects";
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
</script>

<div class="page projects">
  <h1>
    <ProgressiveWriter text={["Projects"]} speed={40} delay={300} />
    <noscript>Projects</noscript>
  </h1>
  <div class="projects">
    {#each Projects as { name, htmlUrl, codeUrl, description, date, discontinued }}
      <div class="project">
        <h3>
          <span class="name">{name}</span>
          <div class="links">
            {#if htmlUrl}
              <a href={htmlUrl} class="material-icons-round">link</a>
            {/if}
            {#if codeUrl}
              <a href={codeUrl} class="material-icons-round">code</a>
            {/if}
          </div>
          <div class="right">
            {#if discontinued}
              <div class="discontinued">Discontinued</div>
            {/if}
            <div class="date">{dayjs(date).format("MMMM YYYY")}</div>
          </div>
        </h3>
        <p class="description">{description}</p>
      </div>
    {/each}
  </div>
</div>
