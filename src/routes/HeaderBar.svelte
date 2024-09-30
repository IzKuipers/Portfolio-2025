<script lang="ts">
  import { navigating } from "$app/stores";
  import type { ReadableStore } from "../types/writable";
  import Logo from "./HeaderBar/Logo.svelte";
  import Navigation from "./HeaderBar/Navigation.svelte";

  export let sidebarOpened: ReadableStore<boolean>;

  navigating.subscribe((v) => {
    $sidebarOpened = false;
  });
</script>

<header class:nav-opened={$sidebarOpened}>
  <Logo />
  <div class="desktop-nav-wrapper">
    <Navigation className="desktop-nav" />
  </div>
  <button
    class="sidebar-toggle material-icons-round"
    on:click={() => ($sidebarOpened = !$sidebarOpened)}
    >{$sidebarOpened ? "close" : "menu"}</button
  >
</header>
<div class="mobile-nav-wrapper" class:show={$sidebarOpened}>
  <Navigation className="mobile-nav" />
</div>
