import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  return { path: params.path };
}) satisfies PageServerLoad;
