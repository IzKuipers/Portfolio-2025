import { error } from "@sveltejs/kit";
import { getBlogPosts } from "../../../../../../ts/blog";
import type { PageServerLoad } from "./$types";
import { readdir, readFile } from "fs/promises";
import { resolve } from "path";

export const load = (async ({ params: { year, month, day, name } }) => {
  const posts = (await getBlogPosts())?.filter(
    (post) =>
      post.date.year === +year &&
      post.date.month === +month &&
      post.date.day === +day &&
      post.name === name
  );

  console.log(year, month, day, name);

  if (!posts?.length) throw error(404, { message: "Post not found" });

  const text = await readFile(
    resolve(`blog/${year}-${month}-${day}-${name}.md`),
    "utf-8"
  );

  return {
    posts,
    year,
    month,
    day,
    name,
    text,
    displayName: posts[0].displayName
  };
}) satisfies PageServerLoad;
