<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    localStorage.setItem("locale", "nl");
    location.href = "/home";
  });
</script>
