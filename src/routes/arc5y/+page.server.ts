import axios from "axios";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  try {
    const response = await axios.get("https://cdn.arcapi.nl/arc5y/5y.md", {
      responseType: "text",
    });

    const content = response.data;

    return {
      error: false,
      content,
    };
  } catch (e){
    return {
      error: `${e}`,
      content: "",
    };
  }
}) satisfies PageServerLoad;
