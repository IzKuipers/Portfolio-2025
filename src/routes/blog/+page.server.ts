import { readdir } from "fs/promises";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { resolve } from "path";
import { getBlogPosts } from "../../ts/blog";

export const load = (async () => {
  const posts = await getBlogPosts();

  if (!posts) throw error(404, { message: "Blog is empty" });

  return { posts };
}) satisfies PageServerLoad;
