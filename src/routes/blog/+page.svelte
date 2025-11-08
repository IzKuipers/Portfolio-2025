<script lang="ts">
  import { _ } from "svelte-i18n";
  import type { PageData } from "./$types";
  import dayjs from "dayjs";

  export let data: PageData;
</script>

<div class="page blog-overview article">
  <h1>{$_("blog._name")}</h1>
  <p>{$_("blog.intro")}</p>

  <h2>{$_("blog.posts")}</h2>
  <ul>
    {#each data.posts as { date, name, displayName } (`${Object.values(date).join("-")}-${name}`)}
      <li>
        <div>
          <a href="/blog/{date.year}/{date.month}/{date.day}/{name}">
            {displayName}
          </a>
          <span class="dash">&mdash;</span>
          <span class="date">
            {dayjs(`${date.year}-${date.month}-${date.day}`).format(
              "D MMMM YYYY"
            )}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</div>
