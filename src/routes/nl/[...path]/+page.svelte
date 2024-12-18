<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  onMount(() => {
    localStorage.setItem("locale", "nl");
    location.href = `/${data.path}`;
  });
</script>
