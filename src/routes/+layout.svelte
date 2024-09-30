<script lang="ts">
  import "../css/main.css";
  import { Store } from "../ts/writable";
  import HeaderBar from "./HeaderBar.svelte";

  let sidebarOpened = Store<boolean>(false);
</script>

<HeaderBar {sidebarOpened} />
<div class="container">
  <slot />
</div>
