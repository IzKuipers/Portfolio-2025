import { createTransport } from "nodemailer";
import config from "../../../mailer.config.json";

export async function sendMessage(
  name: string,
  email: string,
  message: string
) {
  console.log(config);
  try {
    const transport = createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    const info = await transport.sendMail({
      from: `"${name}" <${email}>`,
      to: config.user,
      subject: `Message sent from Contact Page by ${email}`,
      text: message,
    });

    return !!info.accepted;
  } catch (e) {
    console.log(e);
    return false;
  }
}
