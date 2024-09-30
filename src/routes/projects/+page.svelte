<script>
  import dayjs from "dayjs";
  import { Projects } from "../../ts/stores/projects";
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";

  let index = 0;

  function previous() {
    if (index - 1 < 0) {
      index = Projects.length - 1;

      return;
    }

    index--;
  }

  function next() {
    if (index + 1 >= Projects.length - 1) {
      index = 0;

      return;
    }

    index++;
  }
</script>

<div class="page projects">
  <div class="carousel-wrapper">
    <button class="navigate material-icons-round" on:click={previous}>
      arrow_back
    </button>
    <button class="navigate material-icons-round" on:click={next}>
      arrow_forward
    </button>
    <div class="carousel" style="--page: {index};">
      {#each Projects as { name, htmlUrl, codeUrl, description, date, discontinued, image }, i}
        <div class="project" style="--background: url({image});">
          <!-- <div class="content"> -->
          <div class="info">
            <h1>{name}</h1>
            <p class="description">
              {description}
            </p>
            <p class="date">{dayjs(date).format("MMMM YYYY")}</p>
          </div>
          {#if htmlUrl || codeUrl}
            <div class="links">
              {#if htmlUrl}
                <a href={htmlUrl} class="material-icons-round">link</a>
              {/if}
              {#if codeUrl}
                <a href={codeUrl} class="material-icons-round">code</a>
              {/if}
            </div>
          {/if}
          <!-- </div> -->
        </div>
      {/each}
    </div>
  </div>
  <div class="descriptions">
    {#each Projects as { longDescription }, i}
      {#if index === i}
        <div class="project">
          {@html longDescription}
        </div>
      {/if}
    {/each}
    <p class="more">
      There's more on <a href="https://github.com/IzKuipers">my GitHub</a>!
    </p>
  </div>
</div>
