<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  import SvelteMarkdown from "svelte-markdown";
  import type { PageData } from "./$types";

  export let data: PageData;
  const {
    project: {
      name,
      description,
      longDescription,
      date,
      htmlUrl,
      codeUrl,
      image,
      discontinued,
    },
    id,
    dutchMarkdown,
    englishMarkdown,
  } = data;
  let chosenLocale: string;

  onMount(() => {
    chosenLocale = localStorage.getItem("locale") || "en";
  });
</script>

<svelte:head>
  <title>{name} - {$_("projects.gallery.name")} - Izaak Kuipers</title>
</svelte:head>

<div class="page project-details">
  <div class="screenshot" style="--background: url({image})">
    <div class="info">
      <h1>
        <ProgressiveWriter text={[name]} speed={40} delay={300} blinker />
      </h1>
      <p class="description">
        <ProgressiveWriter text={[$_(description)]} speed={20} delay={300} />
      </p>
      <p class="date">
        <ProgressiveWriter
          text={[dayjs(date).format("MMMM YYYY")]}
          delay={500}
          speed={30}
        />
      </p>
    </div>
    {#if htmlUrl || codeUrl}
      <div class="links">
        {#if htmlUrl}
          <a
            href={htmlUrl}
            class="material-icons-round"
            tabindex="-1"
            target="_blank"
          >
            link
          </a>
        {/if}
        {#if codeUrl}
          <a
            href={codeUrl}
            class="material-icons-round"
            tabindex="-1"
            target="_blank"
          >
            code
          </a>
        {/if}
      </div>
    {/if}
  </div>
  <div class="markdown-renderer">
    <div class="breadcrumbs">
      <span><a href="/home">Home</a></span>
      <span><a href="/projects">{$_("projects._name")}</a></span>
      <span><a href="/projects/details/{id}"><b>{name}</b></a></span>
    </div>

    {#if discontinued}
      <p class="discontinued red">
        {$_("projects.discontinuedNotice")}
      </p>
    {/if}
    <div class="description">
      {#if chosenLocale === "nl"}
        <SvelteMarkdown source={dutchMarkdown} />
      {:else}
        <SvelteMarkdown source={englishMarkdown} />
      {/if}
    </div>
    {#if htmlUrl || codeUrl}
      <div class="links">
        {#if htmlUrl}
          <a href={htmlUrl} target="_blank">{$_("projects.website")}</a>
        {/if}
        {#if codeUrl}
          {#if htmlUrl}|{/if}
          <a href={codeUrl} target="_blank">{$_("projects.viewCode")}</a>
        {/if}
      </div>
    {/if}
    <p class="more">
      {@html $_("projects.moreProjects")}
    </p>
  </div>
</div>
