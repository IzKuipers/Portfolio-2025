<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    localStorage.setItem("locale", "en");
    location.href = "/home";
  });
</script>
