<script>
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import dayjs from "dayjs";
  import { Projects } from "../../ts/stores/projects";
  import { _ } from "svelte-i18n";

  let index = 0;

  function previous() {
    if (index - 1 < 0) {
      index = Projects.length - 1;

      return;
    }

    index--;
  }

  function next() {
    if (index + 1 >= Projects.length) {
      index = 0;

      return;
    }

    index++;
  }
</script>

<svelte:head>
  <title>{$_("projects._name")} - Izaak Kuipers</title>
</svelte:head>

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
            <h1>
              {#if index === i}
                <ProgressiveWriter
                  text={[$_(name)]}
                  speed={40}
                  delay={300}
                  blinker
                />
              {:else}
                &nbsp;
              {/if}
            </h1>
            <p class="description">
              {#if index === i}
                <ProgressiveWriter
                  text={[$_(description)]}
                  speed={20}
                  delay={300}
                />
              {:else}
                &nbsp;
              {/if}
            </p>
            <p class="date">
              {#if index === i}
                <ProgressiveWriter
                  text={[dayjs(date).format("MMMM YYYY")]}
                  delay={500}
                  speed={30}
                />
              {:else}
                &nbsp;
              {/if}
            </p>
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
    {#each Projects as { longDescription, htmlUrl, codeUrl, discontinued }, i}
      {#if index === i}
        <div class="project">
          {#if discontinued}
            <p class="discontinued red">
              {$_("projects.discontinuedNotice")}
            </p>
          {/if}
          <p>
            {@html $_(longDescription)}
          </p>
          {#if htmlUrl || codeUrl}
            <div class="links">
              {#if htmlUrl}
                <a href={htmlUrl}>{$_("projects.website")}</a>
              {/if}
              {#if codeUrl}
                {#if htmlUrl}|{/if}
                <a href={codeUrl}>{$_("projects.viewCode")}</a>
              {/if}
            </div>
          {/if}
        </div>
      {/if}
    {/each}
    <p class="more">
      {@html $_("projects.moreProjects")}
    </p>
  </div>
</div>
