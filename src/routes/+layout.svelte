<script lang="ts">
  import { onMount } from "svelte";
  import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";
  import "../css/main.css";
  import english from "../i18n/en.json";
  import dutch from "../i18n/nl.json";
  import { Store } from "../ts/writable";
  import HeaderBar from "./HeaderBar.svelte";
  import MouseGlow from "./MouseGlow.svelte";

  let sidebarOpened = Store<boolean>(false);
  let loading = true;
  let language = "en";

  onMount(() => {
    const locale = getLocaleFromNavigator();
    const chosenLocale = localStorage.getItem("locale");

    addMessages("en", english);
    addMessages("nl", dutch);

    language =
      chosenLocale || (locale === "nl" || locale === "be" ? "nl" : "en");

    init({
      initialLocale: language,
      fallbackLocale: "en",
    });

    loading = false;
  });
</script>

{#if !loading}
  <MouseGlow />
  <HeaderBar {sidebarOpened} {language} />
  <div class="container">
    <slot />
  </div>
{/if}
