import { error, redirect } from "@sveltejs/kit";
import { sendMessage } from "../../../ts/mailer";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  return new Response();
};

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData();
  const name = (form.get("name") || "").toString();
  const email = (form.get("email") || "").toString();
  const message = (form.get("message") || "").toString();
  const continueUrl = (form.get("continue") || "/contact/thankyou").toString();

  if (!name || !email || !message) throw error(400, "Bad Request");

  const sent = await sendMessage(name, email, message);

  if (!sent) throw redirect(307, "/contact/failed");

  throw redirect(301, continueUrl);
};
