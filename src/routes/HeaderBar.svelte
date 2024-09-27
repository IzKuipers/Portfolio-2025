<script lang="ts">
  import type { ReadableStore } from "../types/writable";
  import Logo from "./HeaderBar/Logo.svelte";
  import Navigation from "./HeaderBar/Navigation.svelte";

  export let sidebarOpened: ReadableStore<boolean>;
</script>

<header>
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
