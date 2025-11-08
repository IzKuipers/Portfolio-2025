# Looking back at 2025

With the year almost coming to an end, I feel as though it's time to take a good look at what has been accomplished this year, what I've learned, and what I'm planning for 2026.

## The main focus

The main focus for 2025 has been innovation and learning new stuff. I've explored new technologies, looked at new ways to tackle problems, and I've done stuff that I haven't ever dared to do before. You'll notice that most of the stuff I have to say in this post is related in some way to ArcOS, and that's simply because ArcOS has been my focal point this year, with v7 being in active development.

# Security

2025 has been the year of improved security, both in my web applications and in my server infrastructure. First of all, I've finally learned how to use [Wireguard](https://www.wireguard.com/), which is a fast and secure self-hosted VPN, so that I can access resources on my home network without having to open a ton of ports like I used to.

On the project front, ArcOS v7 received support for two-factor authentication using TOTP codes, which is also something I've never done before. Along with that, for the ArcOS team site, I delved deep into the how and why of OAuth, allowing my ArcOS developers to access their team resources just by being a member of the GitHub organization.

# Servers

A couple of years ago, a friend of mine pointed me towards Proxmox, telling me that it was the single most convenient way to host and manage servers for your home infrastructure. At the time, I hesitantly dismissed the idea, because my approach to server infrastructure, and a lot of other things in fact, has always been to implement stuff in the simplest way possible. A good example of this is my way of deploying stuff. I hate docker. If I need an API or something, I just create a systemd service and a bash script. I don't bother with Docker images or automated kubernetes shenanigans, I just use systemd services and user accounts with specific permissions if I'm feeling fancy.

## Proxmox cluster

In August, Proxmox popped back up in my mind. I had already been expanding my infrastructure with the Gateway SVR05 server, which is responsible for routing outbound traffic through to their respective destinations, but something about Proxmox just felt intriguing. I decided to use a beautiful HP ProDesk 600 G3 SFF with a 7th generation Intel Core i5, 24GB of RAM and a 500GB SATA SSD as a test machine so that I could try out Proxmox properly.

I liked Proxmox so much that I ended up using that astonishing little HP as a permanently deployed server. It's a shame, really, because that machine is the most pristine little box I've got in my collection. Anyway, it's a server now, still happily running Proxmox with an absurd amount of performance, really, this thing is stupid quick. 

## Windows Server

The first thing I installed on my Proxmox was a copy of Windows XP I had laying around on my desktop, as you do. The installation was done in three minutes. **Three**. I've installed Windows XP more times than I can count, on an extremely diverse culmination of devices, but this was among the fastest installation processes I had ever witnessed.

After that, I had a crack at setting up a Windows Server 2008 installation with Active Directory Domain Services and Microsoft Exchange. This was quite the mess to set up, and I'm still tinkering with it, but this Proxmox VM acts as a mailserver between my various legacy Windows machines I have set up around the house.

This isn't the first time I've set up a Windows Server installation, the first one I ever did was Windows Server 2003, but this time I dabbled in stuff I wouldn't before, like a mailserver and per-user terminal services (no license though, so it's going to expire in like 100 days from the day I'm writing this).

# Web Development

Naturally, I've also been writing a metric ton of code. It's what I do. Ofcourse, on January 1st 2025, I started working on ArcOS v7, for which I've written over 100k LOC in 10 months, but I've rambled enough about ArcOS. I'd like to touch on some of the things I've explored in effort of learning something new.

## Blazor

In preparation for a project I unfortunately won't disclose, I've been hard at work learning Blazor and MudBlazor. Blazor is a C#-powered SSR framework, powered by .NET, which is used to create websites with the comfort of C#. MudBlazor on the other hand is a UI framework that takes the barebones baselayer that is Blazor, and adds a bunch of super cool UI components to make building your applications a breeze. Look, I've always been a Node.js developer. Typescript, Javascript, Svelte, that's my game. In the land of Blazor, things work very differently than what I'm accustomed to. Some things are very eye opening, others, not so much.

I won't get into the nitty gritty of my experiences with Blazor, I may very well end up writing a dedicated post about that, but the gist of it is that Blazor is very fundamentally different from something like SvelteKit. They're both SSR frameworks, they both work with the templated components approach (unlike React, which uses function parameters and return values to form components), they both have hot reloading, they both have various tools to support the developer, but I feel as though you're a little more free to do whatever you want in SvelteKit land. I've found that Blazor, and C# for the same amount of money, likes to tell you exactly where things are supposed to go, being almost a little too type safe sometimes. But, as with a lot of things, that's just my opinion.

## Internationalization

For ArcOS v7, I've been building my own custom translation engine for adding multiple languages to ArcOS. It's been a whole rollercoaster. In short, I want to be able to put a translation string in the HTML directly, without any additional imports. For `svelte-i18n`, you've got `<span>{$_("foo.bar.baz")}</span>`. However, to make the massive job of translating ArcOS a lot easier, I wanted a simpler approach: `<span>%foo.bar.baz%</span>`. These percent-strings are automatically replaced by a kernel module, using mutation observers and various other stuff. This makes the translation super fast while also making sure that the code stays _readable_.

A major downside of translating stuff like Sacruda and the very website you're reading this on right now is that the Svelte code becomes inherently less readable because you've got all that `{$_("")}` guff all over the place. My approach minimalizes the extra characters by just using JSON hierarchy strings (as I call them) surrounded by percent symbols.

> _NOTE:_ ArcOS does NOT yet have support for multiple languages. It's a constant process of replacing every string of text in the OS with a translation string, so it's taking a very long time. The branch, `izk-test-i18n-implementation`, won't be merged into `main` for another couple months.

## Node package

Yet another ArcOS v7 thing here, I published my very first Node package! It's kind of absurd that it took me years to finally do it, but [@izkuipers/v7cli](https://npmjs.org/package/v7cli) is a package I wrote to allow developers to easily create third-party apps for ArcOS. It's in need of a refresh (time flies), but it's there nonetheless.

The package is a command-line utility and is built using Typescript. It uses socket.io for the development server, clack promps for user input, axios for resource acquisition, colors.js for compatible terminal colors, and more.

# Documentation

It's a scary thing, you know. Many developers despise two concepts: documentation and code commenting. I'm the same way, and that'll never change. That said, I knew I couldn't implement a third-party app system for ArcOS without telling the developers what ArcOS APIs they have at their disposal, and what they can do with it. So, I'm working on my first real [documentation site](https://docs.arcweb.nl/) using GitBook. It's an amazing platform, the user experience they've created is outstanding and writing docs using their suite is a breeze.

The documentation site in question contains all of the information ArcOS app developers might need to create an app. On this site, I talk about the various internal ArcOS APIs they have access to, best practices for user experience, and how to distribute their app on the app store. It's still far from done, as seen by the big red banner at the top of the site, but I'm getting there.

# In summary

I thought this year was actually pretty muted on the innovation front, but as I'm now discovering, I've actually done a lot of stuff to expand my skillset, to push the boundaries of my own knowledge, and to challenge myself, all in the name of improving the quality of the software I write, and the help I provide.

Besides growing tremendously as a developer, I also grew as a person. I'm working on my soft skills in the context of a company, I'm getting my driver's license, I'm finishing school, and I'm slowly but surely becoming a better person. I'm taking better care of myself, and I'm focusing on what's important.

# What's next?

I haven't the foggiest idea what I'm going to do in the upcoming year. I'm highly focused on growing as a person, so that'll probably be a recurrance for 2026. Alongside that, I'd love to keep expanding the ArcOS team, maybe even creating a more prominent online presence by documenting ArcOS in longform videos on YouTube. I'd also like to consolidate a bunch of my server infrastructure, because some of it is still a very large blob of spaghetti I can't seem to lessen in any meaningful way.

---

2025 has been an amazing year, despite some hiccups here and there. I can't wait to see what 2026 will bring to the table.