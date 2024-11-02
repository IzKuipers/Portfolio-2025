<script lang="ts">
  import { navigating } from "$app/stores";
  import { onMount } from "svelte";
  import type { ReadableStore } from "../types/writable";
  import Logo from "./HeaderBar/Logo.svelte";
  import Navigation from "./HeaderBar/Navigation.svelte";

  export let sidebarOpened: ReadableStore<boolean>;
  let showMobileNav = false;

  onMount(() => {
    const query = window.matchMedia("(max-width: 750px)");

    query.addEventListener("change", (e) => {
      showMobileNav = e.matches;
    });
  });

  navigating.subscribe(() => {
    $sidebarOpened = false;
  });
</script>

<header class:nav-opened={$sidebarOpened}>
  <Logo />
  {#if !showMobileNav}
    <div class="desktop-nav-wrapper">
      <Navigation className="desktop-nav" />
    </div>
  {/if}
  {#if showMobileNav}
    <button
      class="sidebar-toggle material-icons-round"
      on:click={() => ($sidebarOpened = !$sidebarOpened)}
    >
      {$sidebarOpened ? "close" : "menu"}
    </button>
  {/if}
</header>
{#if showMobileNav}
  <div class="mobile-nav-wrapper" class:show={$sidebarOpened}>
    <Navigation className="mobile-nav" />
  </div>
{/if}
