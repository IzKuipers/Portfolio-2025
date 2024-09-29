<script>
  import SectionHeader from "./SectionHeader.svelte";
</script>

<div class="page contact">
  <h1>Contact Me</h1>
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
      <section>
        <SectionHeader t="Message$ me$ directly" />
        <p>
          Have a question for me? Click the button to fill out a form and I'll
          get back to you via email.
        </p>
        <a href="/contact/direct" class="contact-direct">Contact me</a>
      </section>
    </div>
  </div>
</div>
