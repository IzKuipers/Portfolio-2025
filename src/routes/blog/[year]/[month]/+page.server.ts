import { error } from "@sveltejs/kit";
import { getBlogPosts } from "../../../../ts/blog";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params: { year, month } }) => {
  const posts = (await getBlogPosts())?.filter(
    (post) => post.date.year === +year && post.date.month === +month
  );

  if (!posts?.length) throw error(404, { message: "No posts for this month" });

  return {
    posts,
    year,
    month,
  };
}) satisfies PageServerLoad;
