# Hi! I'm Izaak

> And this portfolio is all about me

On this site I show off what I can do, and what I've done in the past. Want to know how my skills came to be? Or how long I've been active in IT? It's all here.

View the live deployment of this portfolio here: https://izkuipers.nl/home

## Running the frontend

First of all, clone the git repository:

```bash
git clone git@github.com:IzKuipers/Portfolio-2025
```

Then, using your favourite NodeJS package manager (`yarn` in my case), run the frontend:

<details>

<summary>
  Yarn
</summary>

Satisfy dependencies:

```bash
yarn
```

Then run the frontend:

```bash
yarn dev
```

... or build it if you want:

```bash
yarn build
```

</details>

<details>

<summary>
  Node Package Manager (npm)
</summary>

Satisfy dependencies:

```bash
npm install
```

Then run the frontend:

```bash
npm run dev
```

... or build it if you want:

```bash
npm run build
```

</details>

The frontend should be running on http://localhost:5173 if you're running instead of building.

## Setting up the mailer

This frontend makes use of [nodemailer](https://npm.io/package/nodemailer) to allow visitors to send me an email directly from the site instead of having to open their own email client. However, this part of the codebase requires some configuration before it'll be functional for you. Follow along to configure it:

1. Make a copy of `mailer.example.config.json` as `mailer.config.json` and open it in your favourite text editor.
2. replace the value of `user` with your Gmail email address (Gmail is what I use, so that's what I made the mailer point to)
3. Replace the value of `pass` with an App Password for your Google account which you can create [here](myaccount.google.com/apppasswords). Do note that you must have 2FA enabled on your google account for this page to be available to you. It's also very possible that Google will bug out and refuse to give you a password, I've seen it happen.
4. Start the frontend, go to the Contact Me page, and see if it works!

## Author

Izaak Kuipers <izaak.kuipers@gmail.com>

## License

MIT
