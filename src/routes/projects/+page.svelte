<script>
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import dayjs from "dayjs";
  import { _ } from "svelte-i18n";
  import { Projects } from "../../ts/stores/projects";

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
  <div class="new-projects-notice">
    <span class="material-icons-round">code</span>
    <span>
      {$_("projects.newNotice")}
      <a href="/newprojects">{$_("projects.gallery.name")}</a>
    </span>
  </div>
  <div class="carousel-wrapper">
    <button class="navigate material-icons-round" on:click={previous}>
      arrow_back
    </button>

    <button class="navigate material-icons-round" on:click={next}>
      arrow_forward
    </button>
    <div class="page-indicator-wrapper">
      <div class="page-indicator">
        {#each Projects as { name }, i}
          <button
            class="dot"
            class:active={index === i}
            on:click={() => (index = i)}
            title={name}
            tabindex="-1"
          />
        {/each}
      </div>
    </div>
    <div class="carousel" style="--page: {index};">
      {#each Projects as { name, htmlUrl, codeUrl, description, date, image }, i}
        <div class="project" style="--background: url({image});">
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
                <a href={htmlUrl} class="material-icons-round" tabindex="-1"
                  >link</a
                >
              {/if}
              {#if codeUrl}
                <a href={codeUrl} class="material-icons-round" tabindex="-1"
                  >code</a
                >
              {/if}
            </div>
          {/if}
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
