<script lang="ts">
  import { _ } from "svelte-i18n";
  import type { PageData } from "./$types";
  import dayjs from "dayjs";

  export let data: PageData;
</script>

<div class="page blog-overview article">
  <p>
    <a href="/blog">{$_("blog._name")}</a> /
    {data.year}
  </p>
  <h1>{$_("blog.posts")} - {data.year}</h1>
  <ul>
    {#each data.posts as { date, name, displayName } (`${Object.values(date).join("-")}-${name}`)}
      <li>
        <a href="/blog/{date.year}/{date.month}/{date.day}/{name}">
          {displayName}
        </a>
        <span>
          &mdash;
          {dayjs(`${date.year}-${date.month}-${date.day}`).format(
            "D MMMM YYYY"
          )}
        </span>
      </li>
    {/each}
  </ul>
</div>
