<script lang="ts">
  import { page } from "$app/stores";
  import { _ } from "svelte-i18n";
  import { NavigationPages } from "../../ts/stores/pages";
  import LanguageToggle from "./Navigation/LanguageToggle.svelte";

  export let className = "";
  export let language: string;
</script>

<nav class={className}>
  <ul>
    {#each Object.entries(NavigationPages) as [route, caption]}
      <li>
        <a href={route} class:active={$page.route.id === route}>
          {$_(`${caption}._name`)}
        </a>
      </li>
    {/each}
  </ul>
  <LanguageToggle {language} />
</nav>
