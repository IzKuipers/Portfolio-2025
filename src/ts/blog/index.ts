import { readdir } from "fs/promises";
import type { BlogPost } from "../../types/blog";
import { resolve } from "path";

export async function getBlogPosts(): Promise<BlogPost[] | undefined> {
  try {
    const files = await readdir(resolve("blog"), { withFileTypes: true });

    const result = [];

    for (const file of files) {
      if (!file.name.match(/[0-9]+-[0-9]+-[0-9]+-(.*?)\.md/g)) continue;

      const [year, month, day] = file.name.split("-").map(Number);

      console.log(year, month, day);
      const name = file.name
        .replace(`${year}-${month}-${day}-`, "")
        .replace(".md", "");
      const displayName = name.replaceAll("-", " ");

      result.push({
        name,
        displayName,
        date: { year, month, day },
      });
    }

    return result.sort((a, b) => {
      const dateA = new Date(a.date.year, a.date.month - 1, a.date.day);
      const dateB = new Date(b.date.year, b.date.month - 1, b.date.day);
      return dateB.getTime() - dateA.getTime();
    });
  } catch {
    return undefined;
  }
}
