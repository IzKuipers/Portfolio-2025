<script lang="ts">
  export let language: string;

  function set(language: string) {
    localStorage.setItem("locale", language);
    setTimeout(() => {
      location.reload();
    });
  }
</script>

<div class="language-toggle">
  <button on:click={() => set("en")} class:selected={language === "en"}
    >EN</button
  >
  <span>/</span>
  <button on:click={() => set("nl")} class:selected={language === "nl"}
    >NL</button
  >
</div>
