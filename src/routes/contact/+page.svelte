<script>
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import SectionHeader from "./SectionHeader.svelte";
</script>

<div class="page contact">
  <h1>
    <ProgressiveWriter text={["Contact Me"]} speed={40} delay={300} />
    <noscript>Contact Me</noscript>
  </h1>
  <div class="contact-panes">
    <div class="pane links">
      <section>
        <SectionHeader t="GitHub" />
        <p>
          <a href="https://github.com/IzKuipers">
            https://github.com/IzKuipers
          </a>
        </p>
      </section>
      <section>
        <SectionHeader t="Twitter" />
        <p>
          <a href="https://twitter.com/IzKuipers">
            https://twitter.com/IzKuipers
          </a>
        </p>
      </section>
      <section>
        <SectionHeader t="IzKuipers$ Community" />
        <p>
          <a href="https://discord.gg/WW3KXHUFgj">
            https://discord.gg/WW3KXHUFgj
          </a>
        </p>
      </section>
    </div>
    <div class="pane methods">
      <section>
        <SectionHeader t="Email" />
        <p>
          <a href="mailto:izaak.kuipers@gmail.com">izaak.kuipers@gmail.com</a>
        </p>
      </section>
      <section>
        <SectionHeader t="Discord" />
        <p>
          <a href="https://discord.com/users/656469722526908427">@izkuipers</a>
        </p>
      </section>
    </div>
  </div>
  <div class="direct">
    <h1>
      <ProgressiveWriter
        text={["Message me directly"]}
        speed={40}
        delay={300}
      />
      <noscript>Message me directly</noscript>
    </h1>
    <p>
      Have a question for me? Fill out the following form and I'll get back to
      you via email as soon as I see it:
    </p>
    <form action="/contact/direct" method="post">
      <input type="text" name="name" placeholder="What's your name?" required />
      <input type="email" name="email" placeholder="Your email?" required />
      <textarea name="message" placeholder="Your message?" required></textarea>
      <input type="submit" value="Send" />
    </form>
  </div>
</div>
