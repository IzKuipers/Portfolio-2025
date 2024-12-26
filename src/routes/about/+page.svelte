<script>
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$_("about._name")} - Izaak Kuipers</title>
</svelte:head>

<div class="page about">
  <h1>
    <ProgressiveWriter text={[$_("about._name")]} speed={40} delay={300} />
  </h1>

  <p>
    {$_("about.summary")} <a href="https://sacruda.nl">Sacruda</a>.
  </p>

  <h2>
    <ProgressiveWriter
      text={[$_("about.history.title")]}
      speed={40}
      delay={300}
    />
  </h2>

  <p>
    {$_("about.history.text")}
  </p>

  <h2>
    <ProgressiveWriter
      text={[$_("about.skills.title")]}
      speed={40}
      delay={300}
    />
  </h2>

  <div class="skills">
    <div class="skill">
      <h3 class="title">{$_("about.skills.frontend")}</h3>
      <p class="content">HTML, CSS, JS, TS, Svelte</p>
    </div>
    <div class="skill">
      <h3 class="title">{$_("about.skills.backend")}</h3>
      <p class="content">NodeJS, MongoDB, SQL, C#, Go</p>
    </div>
    <div class="skill">
      <h3 class="title">{$_("about.skills.fullstack")}</h3>
      <p class="content">PHP, SvelteKit</p>
    </div>
    <div class="skill">
      <h3 class="title">{$_("about.skills.summary")}</h3>
      <p class="content">
        C#, Go, HTML, CSS, JS, TS, PHP, SQL, VBA, Rust<span class="grayed"
          >*</span
        >, Python<span class="grayed">*</span>, C++<span class="grayed">*</span>
      </p>
    </div>
    <p class="disclaimer">
      {$_("about.skills.disclaimer")}
    </p>
  </div>

  <h2>
    <ProgressiveWriter
      text={[$_("about.projectsLink.title")]}
      speed={40}
      delay={300}
    />
  </h2>

  <p>
    {@html $_("about.projectsLink.text")}
    <br /><br />
    <a href="/projects" class="projects">{$_("about.projectsLink.link")}</a>
  </p>
</div>
