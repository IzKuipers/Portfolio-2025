<script lang="ts">
  import { _ } from "svelte-i18n";
  import type { PageData } from "./$types";
  import dayjs from "dayjs";

  export let data: PageData;
  const {year,month} = data;
</script>

<div class="page blog-overview article">
  <p>
    <a href="/blog">{$_("blog._name")}</a> /
    <a href="/blog/{year}">{year}</a> /
    {month}
  </p>
  <h1>
    {$_("blog.posts")} - {dayjs(`${data.year}-${data.month}-01`).format(
      "MMMM YYYY"
    )}
  </h1>
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
