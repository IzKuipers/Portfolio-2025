<script lang="ts">
  import { _ } from "svelte-i18n";
  import type { PageData } from "./$types";
  import SvelteMarkdown from "svelte-markdown";

  export let data: PageData;
  const { year, month, day, name, text, displayName } = data;
</script>

<div class="page blog-overview article">
  <p>
    <a href="/blog">{$_("blog._name")}</a> /
    <a href="/blog/{year}">{year}</a> /
    <a href="/blog/{year}/{month}">{month}</a> /
    <a href="/blog/{year}/{month}/{day}">{day}</a> / {data.displayName}
  </p>

  <div class="markdown-renderer">
    <SvelteMarkdown source={text}></SvelteMarkdown>
  </div>
</div>
