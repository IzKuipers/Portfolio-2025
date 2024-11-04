<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { project } = data;
</script>

<div class="page about">
  <h1>Work in progress</h1>
  <p>
    I'm still working on this page! Until it's done, here's the JSON of the
    project you requested:
  </p>
  <pre>{JSON.stringify(project, null, 2)}</pre>
</div>
