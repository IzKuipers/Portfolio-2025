<script lang="ts">
  import { onMount } from "svelte";
  import "../css/main.css";
  import { Store } from "../ts/writable";
  import HeaderBar from "./HeaderBar.svelte";
  import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";
  import dutch from "../i18n/nl.json";
  import english from "../i18n/en.json";

  let sidebarOpened = Store<boolean>(false);
  let loading = true;

  onMount(() => {
    const locale = getLocaleFromNavigator();
    const chosenLocale = localStorage.getItem("locale");

    addMessages("en", english);
    addMessages("nl", dutch);

    init({
      initialLocale:
        chosenLocale || (locale === "nl" || locale === "be" ? "nl" : "en"),
      fallbackLocale: "en",
    });

    loading = false;
  });
</script>

{#if !loading}
  <HeaderBar {sidebarOpened} />
  <div class="container">
    <slot />
  </div>
{/if}
