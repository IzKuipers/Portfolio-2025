import { error } from "@sveltejs/kit";
import { getBlogPosts } from "../../../../../ts/blog";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params: { year, month, day } }) => {
  const posts = (await getBlogPosts())?.filter(
    (post) =>
      post.date.year === +year &&
      post.date.month === +month &&
      post.date.day === +day
  );

  if (!posts?.length) throw error(404, { message: "No posts for this day" });

  return {
    posts,
    year,
    month,
    day,
  };
}) satisfies PageServerLoad;
