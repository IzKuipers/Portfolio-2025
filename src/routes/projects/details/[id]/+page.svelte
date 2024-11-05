<script lang="ts">
  import { _ } from "svelte-i18n";
  import type { PageData } from "./$types";
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import dayjs from "dayjs";

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
  } = data;
</script>

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
  <p>
    {@html $_(longDescription)}
  </p>
</div>
