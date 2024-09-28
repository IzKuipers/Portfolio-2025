import type { TypeNode } from "../../types/writer";
import { Sleep } from "../sleep";

export class ProgressiveWriter {
  target: HTMLSpanElement;
  speed = 40;

  constructor(target: HTMLSpanElement) {
    if (!target)
      throw new Error("Can't initialize writer without a valid target.");

    this.target = target;
  }

  async speedControlledWrite(speed: number, items: (TypeNode | string)[]) {
    const oldSpeed = this.speed;

    this.speed = speed;
    await this.write(...items);
    this.speed = oldSpeed;
  }

  async write(...items: (TypeNode | string)[]) {
    if (!this.target) return;

    this.target.innerHTML = "";

    for (const item of items) {
      const isString = typeof item === "string";
      const words = (isString ? item : item.text).split(" ");

      for (const word of words) {
        const data = isString ? { text: item } : item;
        const wrapper = document.createElement("span");

        wrapper.className = `word-wrapper ${
          isString ? "" : item.className || ""
        }`;

        if (data.href) {
          wrapper.addEventListener("click", (e) => {
            window.open(data.href, "_blank");
          });
        }

        this.target.append(wrapper);

        for (const char of words[words.length - 1] === word
          ? word
          : word + " ") {
          await this.putCharacter(char, wrapper);

          await Sleep(this.speed);
        }
      }
    }
  }

  async putCharacter(byte: string, wrapper?: HTMLSpanElement) {
    switch (byte) {
      case "\n":
        return this.lineBreak();
      case "$":
        return await Sleep(this.speed);
    }

    (wrapper || this.target).append(byte);
  }

  lineBreak() {
    const br = document.createElement("br");

    this.target.append(br);
  }

  clear() {
    this.target.innerHTML = "";
  }
}
