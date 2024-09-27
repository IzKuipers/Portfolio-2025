<script lang="ts">
  import { Store } from "../ts/writable";
  import type { LayoutData } from "./$types";
  import HeaderBar from "./HeaderBar.svelte";
  import "../css/main.css";

  export let data: LayoutData;

  let sidebarOpened = Store<boolean>(false);
</script>

<HeaderBar {sidebarOpened} />
<div class="container">
  <slot />
</div>
