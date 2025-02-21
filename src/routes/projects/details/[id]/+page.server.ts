import { error } from "@sveltejs/kit";
import { resolve } from "path";
import { Projects } from "../../../../ts/stores/projects";
import type { PageServerLoad } from "./$types";
import { readFile } from "fs/promises";

export const load = (async ({ params: { id } }) => {
  const project = Projects[+id];

  if (!project) throw error(404, "Not found");

  const englishMarkdown = await readFile(
    resolve("projects/en", `${project.id}.md`),
    "utf-8"
  );

  const dutchMarkdown = await readFile(
    resolve("projects/nl", `${project.id}.md`),
    "utf-8"
  );

  return { project, id, englishMarkdown, dutchMarkdown };
}) satisfies PageServerLoad;
