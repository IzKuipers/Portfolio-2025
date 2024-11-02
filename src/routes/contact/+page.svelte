<script>
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import { _ } from "svelte-i18n";
  import SectionHeader from "./SectionHeader.svelte";
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
        <SectionHeader t={$_("contact.twitter")} />
        <p>
          <a href="https://twitter.com/IzKuipers">
            https://twitter.com/IzKuipers
          </a>
        </p>
      </section>
      <section>
        <SectionHeader t={$_("contact.community")} />
        <p>
          <a href="https://discord.gg/WW3KXHUFgj">
            https://discord.gg/WW3KXHUFgj
          </a>
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
        <SectionHeader t={$_("contact.discord")} />
        <p>
          <a href="https://discord.com/users/656469722526908427">@izkuipers</a>
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
      <input
        type="text"
        name="name"
        placeholder={$_("contact.direct.name")}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={$_("contact.direct.email")}
        required
      />
      <textarea
        name="message"
        placeholder={$_("contact.direct.message")}
        required
      ></textarea>
      <input type="submit" value={$_("contact.direct.send")} />
    </form>
  </div>
</div>
