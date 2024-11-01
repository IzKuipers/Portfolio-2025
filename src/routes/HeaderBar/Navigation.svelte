<script lang="ts">
  import { page } from "$app/stores";
  import { NavigationPages } from "../../ts/stores/pages";

  export let className = "";
</script>

<nav class={className}>
  <ul>
    {#each Object.entries(NavigationPages) as [route, caption]}
      <li>
        <a href={route} class:active={$page.route.id === route}>{caption}</a>
      </li>
    {/each}
  </ul>
</nav>
