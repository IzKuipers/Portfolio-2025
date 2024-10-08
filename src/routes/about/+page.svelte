<script>
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
</script>

<svelte:head>
  <title>About Me - Izaak Kuipers</title>
</svelte:head>

<div class="page about">
  <p>
    Hi! I’m Izaak, a 17 year-old fullstack enthusiast developer from the
    Netherlands. I aim to write software that’s easy to use and that just gets
    the job done. Over the years I’ve pushed the limits of what’s possible with
    web technologies, even going as far as Web Operating Systems. In 2024 I
    started working on my next biggest project: <a href="https://sacruda.nl"
      >Sacruda</a
    >.
  </p>

  <h2>
    <ProgressiveWriter text={["My history"]} speed={40} delay={300} />
    <noscript>My history</noscript>
  </h2>

  <p>
    I’ve been interested in IT from a very young age. I started experimenting
    with an old Windows XP machine at the age of 6, being programming away not a
    year later when I got my first real PC at the age of 7. The first languages
    I took a crack at were Batch and VBS, eventually tackling HTML, CSS and
    Javascript. Over the years I’ve tackled everything from web operating system
    environments to API’s and embedded applications.
  </p>

  <h2>
    <ProgressiveWriter text={["Skills I've mastered"]} speed={40} delay={300} />
    <noscript>Skills I've mastered</noscript>
  </h2>

  <div class="skills">
    <div class="skill">
      <h5 class="title">Frontend</h5>
      <p class="content">HTML, CSS, JS, TS, Svelte, PHP</p>
    </div>
    <div class="skill">
      <h5 class="title">Backend</h5>
      <p class="content">NodeJS, MongoDB, SQL, SvelteKit, C#, Go</p>
    </div>
    <div class="skill">
      <h5 class="title">All languages in one place</h5>
      <p class="content">
        C#, Go, HTML, CSS, JS, TS, PHP, SQL, VBA, Rust<span class="grayed"
          >*</span
        >, Python<span class="grayed">*</span>, C++<span class="grayed">*</span>
      </p>
    </div>
    <p class="disclaimer">
      * Languages I'm learning but haven't mastered (yet)
    </p>
  </div>

  <h2>
    <ProgressiveWriter
      text={["Notable projects I've worked on"]}
      speed={40}
      delay={300}
    />
    <noscript>Notable projects I've worked on</noscript>
  </h2>

  <p>
    I’ve worked on a lot of projects over the years, some would say even <b
      >too many</b
    >. To see what projects I’ve created in that time, take a look at my
    Projects page:
    <br /><br />
    <a href="/projects" class="projects">My Projects</a>
  </p>
</div>
