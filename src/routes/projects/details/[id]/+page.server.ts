import { error } from "@sveltejs/kit";
import { Projects } from "../../../../ts/stores/projects";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params: { id } }) => {
  const project = Projects[+id];

  if (!project) throw error(404, "Not found");

  return { project };
}) satisfies PageServerLoad;
