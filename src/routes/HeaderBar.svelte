<script lang="ts">
  import { navigating } from "$app/stores";
  import { onMount } from "svelte";
  import type { ReadableStore } from "../types/writable";
  import Logo from "./HeaderBar/Logo.svelte";
  import Navigation from "./HeaderBar/Navigation.svelte";

  export let sidebarOpened: ReadableStore<boolean>;
  export let language: string;
  let showMobileNav = false;

  onMount(() => {
    const query = window.matchMedia("(max-width: 820px)");

    query.addEventListener("change", (e) => {
      showMobileNav = e.matches;
    });

    showMobileNav = query.matches;
  });

  navigating.subscribe(() => {
    $sidebarOpened = false;
  });
</script>

<header class:nav-opened={$sidebarOpened}>
  <Logo />
  {#if showMobileNav}
    <h1 class="mobile-brand-name">IzK</h1>
  {/if}
  {#if !showMobileNav}
    <div class="desktop-nav-wrapper">
      <Navigation className="desktop-nav" {language} />
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
    <Navigation className="mobile-nav" {language} />
  </div>
{/if}
