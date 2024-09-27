<script lang="ts">
  import { page } from "$app/stores";
  import { NavigationPages } from "../../ts/stores/pages";

  export let className = "";
</script>

<nav class={className}>
  {#each Object.entries(NavigationPages) as [route, caption]}
    <a href={route} class:active={$page.route.id === route}>{caption}</a>
  {/each}
</nav>
