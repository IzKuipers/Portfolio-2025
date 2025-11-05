import { error } from "@sveltejs/kit";
import { getBlogPosts } from "../../../ts/blog";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params: { year } }) => {
  const posts = (await getBlogPosts())?.filter(
    (post) => post.date.year === +year
  );

  if (!posts?.length) throw error(404, { message: "No posts for this year" });

  return {
    posts,
    year,
  };
}) satisfies PageServerLoad;
