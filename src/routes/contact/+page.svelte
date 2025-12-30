<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
  import SectionHeader from "./SectionHeader.svelte";

  let sending = false;
</script>

<svelte:head>
  <title>{$_("contact._name")} - Izaak Kuipers</title>
</svelte:head>

<div class="page contact">
  <h1>
    <ProgressiveWriter text={[$_("contact._name")]} speed={40} delay={300} />
  </h1>
  <div class="contact-panes">
    <div class="pane links">
      <section>
        <SectionHeader t={$_("contact.github")} />
        <p>
          <a href="https://github.com/IzKuipers">
            https://github.com/IzKuipers
          </a>
        </p>
      </section>
      <section>
        <SectionHeader t={$_("contact.discord")} />
        <p>
          <a href="https://discord.com/users/656469722526908427">@izkuipers</a>
        </p>
      </section>
    </div>
    <div class="pane methods">
      <section>
        <SectionHeader t={$_("contact.email")} />
        <p>
          <a href="mailto:izaak.kuipers@gmail.com">izaak.kuipers@gmail.com</a>
        </p>
      </section>
      <section>
        <SectionHeader t={$_("contact.cv.header")} />
        <p>
          <a href="/resume-izkuipers.pdf">{$_("contact.cv.open")}</a>
        </p>
      </section>
    </div>
  </div>
  <div class="direct">
    <h1>
      <ProgressiveWriter
        text={[$_("contact.direct.title")]}
        speed={40}
        delay={300}
      />
    </h1>
    <p>
      {$_("contact.direct.text")}
    </p>
    <form action="/contact/direct" method="post">
      <label for="name">{$_("contact.direct.name")}</label>
      <input type="text" name="name" id="name" required disabled={sending} />

      <label for="email">{$_("contact.direct.email")}</label>
      <input type="email" name="email" id="email" required disabled={sending} />

      <label for="message">{$_("contact.direct.message")}</label>
      <textarea name="message" id="message" required disabled={sending}
      ></textarea>

      <input
        type="submit"
        value={$_("contact.direct.send")}
        on:click={() => setTimeout(() => (sending = true), 10)}
        disabled={sending}
      />
    </form>
  </div>
</div>
