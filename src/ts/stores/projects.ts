import type { Project } from "../../types/projects";
import ArcOS from "../../assets/arcos.png";
import CanvasScript from "../../assets/canvasscript.png";
import Donut from "../../assets/donut.png";
import Inepta from "../../assets/inepta.png";
import InsType from "../../assets/instype.png";
import Sacruda from "../../assets/sacruda.png";

export const Projects: Project[] = [
  {
    name: "Sacruda",
    htmlUrl: "https://sacruda.nl/",
    codeUrl: "https://github.com/Sacruda",
    description:
      "A system to help students keep track of their school assignments.",
    date: "2024-06-27",
    image: Sacruda,
    longDescription:
      "Sacruda's idea is simple. I wanted a simplistic yet powerful way to help me and other students keep track of their school assignments. What followed next was two months of exhaustive programming to create a rather huge project, requiring its own infrastructure to power it. It uses MongoDB for the database, Svelte for the frontend, and NodeJS (Typescript Express API) for the backend. Sacruda is the continuation of the SOS: a previous (and way worse) implementation of the same principle, running on a JSON based database (yikes) and threaded together pieces of ancient Svelte spaghetti.<br><br>Sacruda counts to over 38 thousand lines of code. It's got separate frontends for both mobile and desktop to deliver the best experience for both, an administration panel to manage users of the platform, even a discord bot to easily allow administrators to manage users on the go. Sacruda has powerful filtering, sorting and search options to help students manage their assignments in the most effective way possible. To read more about what Sacruda is capable of, please visit the website linked above (Dutch only, sorry!)",
  },
  {
    name: "ArcOS",
    codeUrl: "https://github.com/IzK-ArcOS",
    discontinued: true,
    description:
      "The super-advanced Svelte Operating System Environment built using web technologies.",
    date: "2020-05-17",
    image: ArcOS,
    longDescription:
      "Really, ArcOS didn't have a vision. It started as a weekend project where I wanted to see what was capable with my ever growing HTML, CSS and JS skills. The original version of ArcOS, named WebOSv1, was supposed to be a two-day endeavour. Unfortunately, that didn't last. I kept expanding upon the initial project for days, eventually scrapping all of it and moving on to WebOSv2. Unlike v1, v2 actually had movable windows and a proper taskbar/start menu. Its design actually shared a lot of similarities with Windows XP, because, well, I like XP. WebOSv2 left a lot to be desired though, as all of the javascript code was written in 1 (one) script-tag in the HTML. As a result of that... odd decision, the LoC of WebOSv2's main HTML file turned out to be near the thousand lines. Remember, I was a starting developer.<br><br>After WebOSv2 came the age of Electron and NodeJS. I began working on WebOSv3 rather impulsively, because I learned what Discord and other big applications were (and still are!) using to display themselves as a desktop app: Electron. I followed a quick start guide from yesteryear to see if I could get it working, and when I did, I immediately started working on WebOSv3. v3 improved a lot as apposed to v2, which actually seems the be the trend, doesn't it? Anyway, v3 had filesystem interaction, multiple users, a bunch of personalization options, even its own Javascript powered terminal. When WebOS became ArcOS, I incremented the version from v3 to v4, not because I started over, but because the rebrand of the project changed the entire look and feel. WebOSv3 became ArcOSv4.<br><br>In July 2022 I wanted to do something different. I had been writing Vanilla JS implementations of ArcOS for over two years, and I wanted to tip the scales. So, I decided to go in the complete opposite direction as apposed to v4: I created ArcOS v5 using Typescript and Svelte. Because v5 used a JS framework, I lost the ability to directly interface with the user's filesystem. So, instead of working around that, I wrote a backend to go along with ArcOS that users could connect to, to store their files and settings in the cloud instead of locally on their machines. This worked perfectly.<br><br>Finally, ArcOS v6 rolled around. I started it near the end of 2023. Its idea was simple, I wanted to reimagine the implementation of v5 to create a more stable, professional and refined experience for the user. It sported services, multiple application instances by creating a custom Process system, a more consistent UI, a more refined bug reports system, more wallpapers, even experimental sideloading. After four consecutive years of writing code for WebOS and ArcOS, I decided to shut down the project. The fact of the matter was that I didn't like working on it anymore. So, on September 1st I said goodbye to the servers, to my team, to four years of hard work, so that I could focus on Sacruda.",
  },
  {
    name: "CanvasScript",
    codeUrl: "https://github.com/IzKuipers/CanvasScript-v1",
    htmlUrl: "https://canvas.izkuipers.nl/",
    description:
      "A rather silly attempt at creating a programming language to manipulate a canvas.",
    date: "2023-05-29",
    image: CanvasScript,
    longDescription:
      "CanvasScript is a silly thing. I wanted to learn more about HTML canvases, and I figured the best way to accomplish that would be to create a project that incorporates them. So, I created CanvasScript. In CanvasScript you can write code to manipulate a canvas. It's got commands for lines, circles, colors, sizes, whatever you want. It's even got variables and comments to allow you to write the most readable and configurable code. It also has error checking to tell you on what line you're making a mistake. This is accomplished using Javascript exception handling.\nCanvasScript doesn't use any normal standards for creating programming languages, it's really just a bunch of functions that have their arguments parsed out of a string for each row in the user's script. The functionality of CanvasScript can be tested using the test file on the GitHub repository, named \"benchmark.canvas\". This file can also be seen in action in the screenshot above. CanvasScript was intended to be a weekend project as well, which it thankfully stayed as. ",
  },
  {
    name: "InsType",
    codeUrl: "https://github.com/IzKuipers/Instype-Backend",
    htmlUrl: "https://instype.izkuipers.nl/",
    description:
      "A Socket.IO application where everyting anyone types is immediately broadcasted to everyone else",
    date: "2024-08-10",
    image: InsType,
    longDescription:
      "InsType is a fun one. It expands upon the traditional telephone communication (perhaps discord with screen sharing too) and transforms it into a purely textual environment. When you join InsType, you're in this one room with everyone else that's connected. When you type even one character, that character is displayed to the room, meaning that everyone else can see what you type, especially the typos. This encourages the user to type carefully in order to not prevent embarrassing themselves. InsType is powered with a Typescript Socket.IO backend, with a rather simple set of events to connect, disconnect and transmit text. InsType is one of my simplest Socket.IO applications, despite the fact that it's often the most fun.",
  },
  {
    name: "Inepta",
    codeUrl: "https://github.com/IzKuipers/silly",
    htmlUrl: "https://inepta.izkuipers.nl",
    description:
      "A Web operating system written in JS to set an example of what's possible with the language",
    date: "2024-08-16",
    image: Inepta,
    longDescription:
      "Inepta is a silly blast from the past: it's (start of) an OS written in vanilla Javascript to look back at the legacy ArcOS days. I made it to see exactly what's actually possible with just plain old vanilla Javascript in a modern browser. To my surprise, it's actually quite a lot. Inepta (which is Latin for 'silly', by the way) sports Process Management, a virtual filesystem (by storing a JSON object in LocalStorage), and a modern-yet-old-school aesthetic. Everything about it is written in a simplistic and modular way to show beginner Javascript programmers (like my classmates) what's theoretically and practically possible in JS.",
  },
  {
    name: "Donut.c-TS",
    codeUrl: "https://github.com/IzKuipers/Donut.c-TS",
    description: "A port of Donut.C to Typescript",
    date: "2023-04-13",
    image: Donut,
    longDescription:
      "There really isn't much to say about Donut.C-TS: it's just a test to see if I could port the famous Donut.C project to Typescript. When I made it I actually ported to one of my other projects, ArcOS as the 'DonutApp' application. This can be seen on the ArcOS GitHub.",
  },
];
