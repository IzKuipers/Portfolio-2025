<script lang="ts">
  import { Store } from "../ts/writable";
  import HeaderBar from "./HeaderBar.svelte";
  import "../css/main.css";

  let sidebarOpened = Store<boolean>(false);
</script>

<HeaderBar {sidebarOpened} />
<div class="container">
  <slot />
</div>
